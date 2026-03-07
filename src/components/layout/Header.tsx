import { Menu } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'

export default function Header() {
  const toggleSidebar = useAppStore((s) => s.toggleSidebar)

  return (
    <header className="sticky top-0 z-40 h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
      <button
        onClick={toggleSidebar}
        className="p-1.5 rounded hover:bg-gray-100 text-gray-600"
        aria-label="切換側邊欄"
      >
        <Menu size={20} />
      </button>

      <span className="font-semibold text-gray-900">Demo Scaffold</span>

      {/* TODO: 依規格書加入右側操作（通知、使用者頭像等） */}
      <div className="ml-auto flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
          PM
        </div>
      </div>
    </header>
  )
}
