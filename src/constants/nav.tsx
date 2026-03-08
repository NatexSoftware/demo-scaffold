import type { ReactNode } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'

export interface NavItem {
  to: string
  label: string
  icon: ReactNode
  /** true = exact match only */
  end?: boolean
}

// AI 新增頁面時，在此陣列追加項目
export const NAV_ITEMS: NavItem[] = [
  { to: '/', label: '首頁總覽', icon: <DashboardIcon />, end: true },
]
