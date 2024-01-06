import { QueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function queryErrorHandler(error) {
	const title = error instanceof Error ? error.message : 'error connecting to server';
	toast.error(title);
}

export function generateQueryClient(){
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5 * (60 * 1000), // 5 minutes
				gcTime: 10 * (60 * 1000), // 10 minutes, default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
				refetchOnMount: true,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
			},
			mutations: {
				onError: queryErrorHandler,
			},
		},
	});
}

export const queryClient = generateQueryClient();