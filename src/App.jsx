import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Providers } from './components/providers/Providers'
import { Home } from './components/Home'
import { Layout } from './Layout'

export function App() {
  return (
    <Providers>
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </Providers>
  )
}
