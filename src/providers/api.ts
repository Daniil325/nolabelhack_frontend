import axios from "axios";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

const BASE_API_URL = "http://localhost:8000/";

export const useGetList = (resourse: string) => {
    return useQuery({
        queryKey: [resourse],
        queryFn: async () => {
            const data = await axios.get(`${BASE_API_URL}${resourse}/`);
            return data;
        },
    });
};

export const useGetItem = async (resourse: string, itemId: string) => {
    return useQuery({
        queryKey: [resourse, itemId],
        queryFn: async () => {
            const { data } = await axios.get(`{$BASE_API_URL}${resourse}/${itemId}`);
            return data;
        },
    });
};

export const usePostItem = async (resourse: string, postData: object) => {
    return useMutation({
        mutationFn: async () => {
            const { data } = await axios.post(`{$BASE_API_URL}${resourse}`, postData);
            return data;
        },
        onSuccess: (data, variables, context) => {
            console.log(data);
            console.log("gooooooooooooooooool");
        },
        onError: (error, variables, context) => {
            console.log("hohliiiiiiiiiiiiiiii");
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
