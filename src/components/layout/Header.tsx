import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import { useAppStore } from '@/store/useAppStore'

export default function Header() {
  const toggleSidebar = useAppStore((s) => s.toggleSidebar)

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', zIndex: (t) => t.zIndex.drawer + 1 }}>
      <Toolbar variant="dense" sx={{ minHeight: 56 }}>
        <IconButton edge="start" onClick={toggleSidebar} aria-label="切換側邊欄" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="subtitle1" fontWeight={600}>Demo Scaffold</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>PM</Avatar>
      </Toolbar>
    </AppBar>
  )
}
