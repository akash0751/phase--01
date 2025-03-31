import { useState, useEffect } from "react";
import axios from "axios";

const cache = new Map();

const useAxios = (url, config = {}, forceRefresh = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (cache.has(url) && !forceRefresh) {
                setData(cache.get(url));
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await axios.get(url, config);
                setData(response.data);
                cache.set(url, response.data); 
            } catch (err) {
                setError("Failed to fetch data"+err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, config, forceRefresh]);

    const refreshData = () => {
        setLoading(true);
        setError(null);
        setData(null);
    };

    return { data, loading, error, refreshData };
};

export default useAxios;
