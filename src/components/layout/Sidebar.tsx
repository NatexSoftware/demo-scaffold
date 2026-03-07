import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Package, Settings } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/utils/cn'

// TODO: 依規格書調整選單項目
const NAV_ITEMS = [
  { to: '/', label: '首頁總覽', icon: LayoutDashboard },
  { to: '/users', label: '使用者管理', icon: Users },
  { to: '/products', label: '產品管理', icon: Package },
  { to: '/settings', label: '系統設定', icon: Settings },
]

export default function Sidebar() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen)

  if (!sidebarOpen) return null

  return (
    <aside className="fixed top-14 left-0 w-60 h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 flex flex-col py-4 z-30">
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
              )
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
