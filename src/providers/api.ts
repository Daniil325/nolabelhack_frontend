import axios from "axios";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

export const BASE_API_URL = "http://localhost:8000/";

export const useGetList = (resourse: string) => {
    return useQuery({
        queryKey: [resourse],
        queryFn: async () => {
            const data = await axios.get(`${BASE_API_URL}${resourse}/`);
            return data;
        },
        refetchInterval: 2000
    });
};

export const useGetItem = async (resourse: string, itemId: string) => {
    return useQuery({
        queryKey: [resourse, itemId],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_API_URL}${resourse}/${itemId}`);
            return data;
        },
    });
};

export const usePostItem = (resourse: string) => {
    return useMutation({
        mutationFn: async (postData: object) => {
            const { data } = await axios.post(`${BASE_API_URL}${resourse}/`, postData);
            return data;
        },
        onSuccess: (data) => {
            return data
        },
        onError: (error) => {
            return error
        },
    });
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});
