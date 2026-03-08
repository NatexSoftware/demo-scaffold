import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppStore } from '@/store/useAppStore'

const SIDEBAR_WIDTH = 240

export default function Layout() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
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
            minWidth: 0,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, sm: 3 },
            ml: isDesktop && sidebarOpen ? `${SIDEBAR_WIDTH}px` : 0,
            transition: 'margin-left 0.2s',
          }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
