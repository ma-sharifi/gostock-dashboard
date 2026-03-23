import { Search, Mail, Bell, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
      {/* Search Bar */}
      <div className="relative w-[400px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder='Pres "K" to search for various stocks'
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-5">
        {/* Mail */}
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Mail className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200" />

        {/* User */}
        <button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm">
            AM
          </div>
          <span className="text-sm font-medium text-gray-700">Airlangga Mahesa</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  )
}
