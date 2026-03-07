import { Users, Package, TrendingUp, Activity } from 'lucide-react'
import { mockUsers, mockProducts } from '@/mock'

// 簡易統計卡片資料（直接從假資料計算）
const stats = [
  {
    label: '使用者總數',
    value: 20,
    icon: Users,
    color: 'text-blue-600 bg-blue-50',
    change: '+12%',
  },
  {
    label: '產品總數',
    value: 30,
    icon: Package,
    color: 'text-green-600 bg-green-50',
    change: '+5%',
  },
  {
    label: '本月成長',
    value: '18%',
    icon: TrendingUp,
    color: 'text-purple-600 bg-purple-50',
    change: '+3%',
  },
  {
    label: '系統狀態',
    value: '正常',
    icon: Activity,
    color: 'text-orange-600 bg-orange-50',
    change: '100% uptime',
  },
]

export default function HomePage() {
  // 取最新 5 筆使用者
  const recentUsers = mockUsers.slice(0, 5)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">總覽</h1>
        <p className="text-gray-500 text-sm mt-1">歡迎使用 Demo Scaffold</p>
      </div>

      {/* 統計卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">{stat.label}</span>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon size={18} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-green-600 mt-1">{stat.change} 較上期</p>
          </div>
        ))}
      </div>

      {/* 最新使用者 */}
      <div className="card p-5">
        <h2 className="text-base font-semibold text-gray-900 mb-4">最新使用者</h2>
        <div className="space-y-3">
          {recentUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover bg-gray-200"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
              }`}>
                {user.status === 'active' ? '啟用' : '停用'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
