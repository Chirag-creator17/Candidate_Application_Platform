import React, { useState, useEffect, useCallback } from 'react';
import JobResults from './JobResults';

const InfiniteScrollGrid = ({ fetchData, Renderer, renderItem }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    // const [filter, setFilter] = useState('');
    const [limit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [initLoad, setInitLoad] = useState(true);
    const [scrollPadding, setScrollPadding] = useState(100);

    const loadMoreItems = useCallback(async () => {
        if (isLoading || !hasMore) return;

        setInitLoad(false);
        setIsLoading(true);
        try {
            const data = await fetchData(limit, offset);
            setItems((prevItems) => [...prevItems, ...data.jdList]);
            setOffset((prevOffset) => prevOffset + limit);
            setHasMore(data.totalCount > offset);

            console.log('offset', offset);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setIsLoading(false);
    }, [fetchData, limit, offset]);

    const handleScroll = useCallback(() => {

        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        console.log(scrollTop, clientHeight, scrollHeight);
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            loadMoreItems();
        }
    }, [isLoading, hasMore, loadMoreItems]);

    useEffect(() => {
        if (initLoad) {
            loadMoreItems();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll], [loadMoreItems]);

    const handleFilterChange = useCallback((e) => {
        setItems([]);
        setOffset(0);
        loadMoreItems();
    }, [loadMoreItems]);

    return (
        <div>
            <Renderer Component={renderItem} data={items} />
            {/* <JobResults jobResults={items} /> */}
        </div>
    );
};

export default InfiniteScrollGrid;