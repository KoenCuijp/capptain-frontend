import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


import { Header } from './components/Header';
import { EventsList } from './components/EventsList';
import './main.css'

// TanStack Query client, for automatic caching and refetching of data
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <EventsList />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;