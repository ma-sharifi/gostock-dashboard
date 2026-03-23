import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const timeframes = ['1Day', '1Week', '1Month', '3Month', '6Month', '1Year', '5Year', 'All']

// Generate realistic-looking stock data
const generateChartData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']
  const dates = [15, 16, 17, 18, 19, 20, 21, 22]
  const basePrice = 150

  const data = []
  let price = basePrice + 40

  for (let i = 0; i < days.length; i++) {
    const pointsPerDay = 8
    for (let j = 0; j < pointsPerDay; j++) {
      const change = (Math.random() - 0.48) * 15
      price = Math.max(130, Math.min(210, price + change))
      data.push({
        time: `${days[i]} ${dates[i]}`,
        label: j === 4 ? `${dates[i]}` : '',
        price: parseFloat(price.toFixed(2)),
        day: days[i],
        date: dates[i],
      })
    }
  }
  return data
}

const chartData = generateChartData()

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs shadow-xl">
        <p className="text-gray-400 text-[10px]">
          21 Sept on 12:00
        </p>
        <p className="font-bold text-sm">${payload[0].value.toFixed(2)}</p>
      </div>
    )
  }
  return null
}

export default function StockChart() {
  const [activeTimeframe, setActiveTimeframe] = useState('1Week')

  // Create custom tick values for XAxis
  const xTicks = []
  const seen = new Set()
  chartData.forEach((d, i) => {
    if (!seen.has(d.date)) {
      seen.add(d.date)
      xTicks.push(i)
    }
  })

  return (
    <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-gray-900">Apple inc</h3>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                1.0%
              </span>
              <span className="text-2xl font-bold text-gray-900">$150,70</span>
            </div>
            <p className="text-xs text-gray-400">
              AAPL &nbsp;&nbsp;
              <span className="text-gray-300">Last update at 14.30</span>
            </p>
          </div>
        </div>
      </div>

      {/* Timeframe Selector */}
      <div className="flex gap-1 mb-6">
        {timeframes.map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTimeframe(tf)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeTimeframe === tf
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-[300px] -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F3F4F6"
            />
            <XAxis
              dataKey="date"
              ticks={[...new Set(chartData.map(d => d.date))]}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              domain={['dataMin - 10', 'dataMax + 10']}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toFixed(0)}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#colorPrice)"
              dot={false}
              activeDot={{
                r: 5,
                fill: '#10B981',
                stroke: '#fff',
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* X-axis day labels */}
      <div className="flex justify-between px-10 mt-1">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((day, i) => (
          <span key={i} className="text-[10px] text-gray-400">{day}</span>
        ))}
      </div>
    </div>
  )
}
