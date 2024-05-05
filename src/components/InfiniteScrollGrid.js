import React, { useState, useEffect, useCallback } from 'react';

const InfiniteScrollGrid = ({ fetchData, Renderer }) => {
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
    const filterData = (data) => {
        const filteredData = data.filter((item) => {
            return filter.every((f) => item.skills.includes(f.value));
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
        <div>
            <Renderer data={filteredItems} />
        </div>
    );
};

export default InfiniteScrollGrid;