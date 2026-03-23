import { useState } from 'react'
import {
  Home,
  LayoutDashboard,
  Wallet,
  Newspaper,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Users,
  Settings,
  Phone,
  Eye,
  EyeOff,
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Wallet, label: 'Wallet', active: false },
  { icon: Newspaper, label: 'News', active: false },
]

const stockSubItems = ['Stock', 'Cryptocurrency', 'Mutual Fund', 'Gold']

const bottomItems = [
  { icon: Users, label: 'Our community', badge: null },
  { icon: Settings, label: 'Settings', badge: 6 },
  { icon: Phone, label: 'Contact us', badge: null },
]

export default function Sidebar() {
  const [stockOpen, setStockOpen] = useState(true)
  const [balanceVisible, setBalanceVisible] = useState(true)

  return (
    <aside className="w-[250px] bg-white flex flex-col border-r border-gray-100 h-screen">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">GoStock</span>
        </div>
      </div>

      {/* Investment Card */}
      <div className="mx-4 mb-6">
        <div className="bg-gray-900 rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-400 rounded-full" />
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-emerald-400 rounded-full" />
          </div>
          <p className="text-xs text-gray-400 mb-1">Total Investment</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              {balanceVisible ? '$5380,90' : '••••••'}
            </span>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {balanceVisible ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
            </button>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-emerald-400 font-medium">+18,10%</span>
            <svg
              className="w-3 h-3 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            </li>
          ))}

          {/* Stock & Fund expandable */}
          <li>
            <button
              onClick={() => setStockOpen(!stockOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <span>Stock & fund</span>
              </div>
              {stockOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {stockOpen && (
              <ul className="ml-11 mt-1 space-y-1">
                {stockSubItems.map((sub) => (
                  <li key={sub}>
                    <a
                      href="#"
                      className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                        sub === 'Stock'
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Bottom Items */}
      <div className="px-3 pb-6 pt-2 border-t border-gray-100">
        <ul className="space-y-1">
          {bottomItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
