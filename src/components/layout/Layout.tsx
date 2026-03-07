import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppStore } from '@/store/useAppStore'

const SIDEBAR_WIDTH = 240

export default function Layout() {
  const sidebarOpen = useAppStore((s) => s.sidebarOpen)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            ml: sidebarOpen ? `${SIDEBAR_WIDTH}px` : 0,
            transition: 'margin-left 0.2s',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
