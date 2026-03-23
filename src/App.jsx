import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import PortfolioCards from './components/PortfolioCards'
import StockChart from './components/StockChart'
import Watchlist from './components/Watchlist'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* My Portfolio */}
          <h2 className="text-2xl font-bold text-gray-900 mb-5">My Portfoliio</h2>
          <PortfolioCards />

          {/* Chart + Watchlist */}
          <div className="flex gap-6 mt-6">
            <StockChart />
            <Watchlist />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
