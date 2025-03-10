import { AuthContextProvider } from '@/contexts/AuthContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

export function Providers({ children }) {
    const queryClient = new QueryClient();
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
            </QueryClientProvider>
        </HelmetProvider>

    )
}
