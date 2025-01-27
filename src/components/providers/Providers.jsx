import { ThemeProvider } from './ThemeProvider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export function Providers({ children }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}
