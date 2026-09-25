import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Stats />
      </main>

      <Footer />
    </div>
  )
}

export default App