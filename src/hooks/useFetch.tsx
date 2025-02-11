import axios, { AxiosError } from "axios"
import { useCallback, useEffect, useState } from "react"

interface FetchResult<T> {
    fetchData: T | null;
    loading: boolean;
    fetchError: Error | null;
    refetch: () => Promise<void>;
}

function useFetch<T>(url: string, method: 'GET' | 'POST' = 'GET', body: unknown = null): FetchResult<T> {
    
    const [fetchData,setFetchData] = useState<T | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const [fetchError,setfetchError] = useState<Error | null>(null);

    const axiosCall = useCallback(async () => {    
        setLoading(true);
        setfetchError(null);

        try {
            const response = method == 'GET' 
                        ? await axios.get<T>(url) 
                        : await axios.post<T>(url,body);
            setFetchData(response.data);
        } catch (err) {
            setfetchError(err instanceof AxiosError ? err : new Error('An error occurred'));
        } finally {
            setLoading(false);
        }
    },[url,method,body])  

    useEffect(()=>{
        axiosCall()
    },[axiosCall]);

    return {fetchData, loading, fetchError, refetch : axiosCall}

}

export default useFetch;