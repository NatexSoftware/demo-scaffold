import { NavLink } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useAppStore } from '@/store/useAppStore'
import { NAV_ITEMS } from '@/constants'

const SIDEBAR_WIDTH = 240

export default function Sidebar() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const sidebarOpen = useAppStore((s) => s.sidebarOpen)
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)

  const drawerContent = (
    <>
      <Toolbar variant="dense" sx={{ minHeight: 56 }} />
      <List sx={{ px: 1 }}>
        {NAV_ITEMS.map(({ to, label, icon, end }) => (
          <ListItemButton
            key={to}
            component={NavLink}
            to={to}
            end={end}
            onClick={() => { if (!isDesktop) setSidebarOpen(false) }}
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
    </>
  )

  // 桌面：persistent（推擠式）
  if (isDesktop) {
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
        {drawerContent}
      </Drawer>
    )
  }

  // 手機/平板：temporary（覆蓋式，點選項目或背景自動關閉）
  return (
    <Drawer
      variant="temporary"
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, boxSizing: 'border-box' },
      }}
    >
      {drawerContent}
    </Drawer>
  )
}
