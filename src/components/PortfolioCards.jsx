import { ChevronRight } from 'lucide-react'

const portfolioData = [
  {
    name: 'Apple',
    ticker: 'AAPL',
    totalShares: '$310,40',
    totalReturn: '-1,10%',
    returnPositive: false,
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    sparklineData: [40, 38, 42, 35, 30, 28, 32],
    sparklineColor: '#EF4444',
  },
  {
    name: 'Meta',
    ticker: 'META',
    totalShares: '$140,45',
    totalReturn: '-0,10%',
    returnPositive: false,
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.93 3.78-3.93 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
      </svg>
    ),
    sparklineData: [35, 38, 40, 36, 34, 30, 28],
    sparklineColor: '#EF4444',
  },
  {
    name: 'Microsoft',
    ticker: 'MSFT',
    totalShares: '$240,98',
    totalReturn: '+0,85',
    returnPositive: true,
    color: '#00A4EF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
        <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
        <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
        <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
      </svg>
    ),
    sparklineData: [30, 35, 33, 38, 42, 40, 45],
    sparklineColor: '#10B981',
  },
  {
    name: 'Google',
    ticker: 'GOOGL',
    totalShares: '$99,12',
    totalReturn: '-0,04%',
    returnPositive: false,
    color: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    sparklineData: [40, 42, 38, 35, 37, 40, 38],
    sparklineColor: '#EF4444',
  },
]

function MiniSparkline({ data, color }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const width = 70
  const height = 35
  const padding = 2

  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - 2 * padding)
    const y = padding + ((max - value) / range) * (height - 2 * padding)
    return `${x},${y}`
  }).join(' ')

  return (
    <svg width={width} height={height} className="flex-shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PortfolioCards() {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-2 pr-10">
        {portfolioData.map((stock) => (
          <div
            key={stock.ticker}
            className="bg-white rounded-2xl p-5 min-w-[230px] flex-shrink-0 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  {stock.icon}
                </div>
                <span className="font-semibold text-sm text-gray-900">
                  {stock.name}
                </span>
              </div>
              <MiniSparkline data={stock.sparklineData} color={stock.sparklineColor} />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Total Shares</span>
                <span className="text-sm font-semibold text-gray-900">
                  {stock.totalShares}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Total Return</span>
                <span
                  className={`text-sm font-semibold ${
                    stock.returnPositive ? 'text-emerald-500' : 'text-red-500'
                  }`}
                >
                  {stock.totalReturn}{' '}
                  {stock.returnPositive ? '↑' : '↓'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <button className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  )
}
