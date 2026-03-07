import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import PeopleIcon from '@mui/icons-material/People'
import InventoryIcon from '@mui/icons-material/Inventory'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { mockUsers, mockProducts } from '@/mock'

const stats = [
  { label: '使用者總數', value: mockUsers.length, icon: <PeopleIcon />, color: '#2563eb' },
  { label: '產品總數', value: mockProducts.length, icon: <InventoryIcon />, color: '#16a34a' },
  { label: '本月成長', value: '18%', icon: <TrendingUpIcon />, color: '#9333ea' },
  { label: '系統狀態', value: '正常', icon: <CheckCircleIcon />, color: '#ea580c' },
]

export default function HomePage() {
  const recentUsers = mockUsers.slice(0, 5)

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} gutterBottom>總覽</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>歡迎使用 Demo Scaffold</Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} lg={3} key={stat.label}>
            <Card>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                  <Avatar sx={{ width: 36, height: 36, bgcolor: `${stat.color}15`, color: stat.color }}>
                    {stat.icon}
                  </Avatar>
                </Stack>
                <Typography variant="h5" fontWeight={700}>{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>最新使用者</Typography>
          <Stack spacing={1.5}>
            {recentUsers.map((user) => (
              <Stack key={user.id} direction="row" alignItems="center" spacing={1.5}>
                <Avatar src={user.avatar} sx={{ width: 32, height: 32 }}>{user.name[0]}</Avatar>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="body2" fontWeight={500} noWrap>{user.name}</Typography>
                  <Typography variant="caption" color="text.secondary" noWrap>{user.email}</Typography>
                </Box>
                <Chip
                  label={user.status === 'active' ? '啟用' : '停用'}
                  size="small"
                  color={user.status === 'active' ? 'success' : 'default'}
                  variant="outlined"
                />
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
