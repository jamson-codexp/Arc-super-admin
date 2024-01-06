import { useMutation, useQuery } from "@tanstack/react-query";
import { showNotification } from "../sevices/helper";

export const useGetQuery = ({ key, offsetValue, limitValue, func }) => {
    const offset = offsetValue || 0;
    const limit = limitValue || 10;
    const options = { offset, limit };
    return useQuery({
        queryKey: [key, options],
        queryFn: () => func(options)
    });
};

export const useMutationQuery = ({ key, func, onSuccess, client }) => {
    return useMutation({
        mutationFn: func,
        onSuccess: (data) => {
            if(data.success) {
                onSuccess();
                client.invalidateQueries({ queryKey: [key] });
            } else {
                showNotification("error", data.result.message);
            }
        }
    });
};