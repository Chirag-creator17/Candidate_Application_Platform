import React, { useState, useEffect, useCallback } from 'react';
import JobSearchBar from '../JobSearchBar';
import JobResults from './JobResults';

const InfiniteScrollGrid = ({ fetchData }) => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [filter, setFilter] = useState([]);
    const [limit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [scrollPadding, setScrollPadding] = useState(100);

    const loadMoreItems = useCallback(async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        try {
            const data = await fetchData(limit, offset);
            setItems((prevItems) => [...prevItems, ...data.jdList]);
            appendFilteredItems(data.jdList);

            setOffset((prevOffset) => prevOffset + limit);
            setHasMore(data.totalCount > offset);
        } catch (error) {
            console.error('Error fetching data:', error, offset);
        } finally {
            setIsLoading(false);
        }
    });

    const handleScroll = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - scrollPadding) {
            loadMoreItems();
        }
    });

    useEffect(() => {
        setItems([]);
        loadMoreItems();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    // Filter Job Search
    const onSelect = (newFilter) => {

        const contains = filter.some((f) => f.filterType === newFilter.filterType);

        if (contains) {
            setFilter((prevFilter) => prevFilter.filter((f) => f.filterType !== newFilter.filterType));
        }

        setFilter((prevFilter) => [...prevFilter, newFilter]);
    }

    const filterData = (data) => {
        const filteredData = data.filter((item) => {
            return filter.every((f) => {
                if (f.option.length == 0) return true;

                if (f.filterType === 'company') return f.onFilter(item, f.option);
                
                return f.option.some((option) => {
                    return f.onFilter(item, option);
                });
            });
        });

        return filteredData;
    }

    const appendFilteredItems = (data) => {
        const filteredData = filterData(data);
        setFilteredItems((prevItems) => [...prevItems, ...filteredData]);
    }

    const updateFilteredItems = (data) => {
        const filteredData = filterData(data);
        setFilteredItems(filteredData);
    }

    useEffect(() => {
        updateFilteredItems(items);
    }, [filter]);

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
                alignItems: 'flex-start',
            }
        }>
            <JobSearchBar onSelect={onSelect} />
            <JobResults data={filteredItems} />
        </div>
    );
};

export default InfiniteScrollGrid;