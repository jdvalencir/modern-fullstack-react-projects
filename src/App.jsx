import { Providers } from './components/providers/Providers'

export function App({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
