import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/utils/cn'

export default function Layout() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className={cn(
          'flex-1 p-6 transition-all duration-200',
          sidebarOpen ? 'ml-60' : 'ml-0'
        )}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
