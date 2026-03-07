import { NavLink } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import InventoryIcon from '@mui/icons-material/Inventory'
import SettingsIcon from '@mui/icons-material/Settings'
import { useAppStore } from '@/store/useAppStore'

const SIDEBAR_WIDTH = 240

// TODO: 依規格書調整選單項目
const NAV_ITEMS = [
  { to: '/', label: '首頁總覽', icon: <DashboardIcon /> },
  { to: '/users', label: '使用者管理', icon: <PeopleIcon /> },
  { to: '/products', label: '產品管理', icon: <InventoryIcon /> },
  { to: '/settings', label: '系統設定', icon: <SettingsIcon /> },
]

export default function Sidebar() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen)

  if (!sidebarOpen) return null

  return (
    <Drawer
      variant="persistent"
      open={sidebarOpen}
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, boxSizing: 'border-box' },
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 56 }} />
      <List sx={{ px: 1 }}>
        {NAV_ITEMS.map(({ to, label, icon }) => (
          <ListItemButton
            key={to}
            component={NavLink}
            to={to}
            end={to === '/'}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              '&.active': { bgcolor: 'primary.50', color: 'primary.main' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>{icon}</ListItemIcon>
            <ListItemText primary={label} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
