import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './hooks/queryClient';

ReactDOM.createRoot(document.getElementById('root')).render(

	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
				<Toaster />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Provider>
  	</React.StrictMode>
);
