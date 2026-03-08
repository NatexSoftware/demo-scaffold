import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Paper sx={{ p: 5, textAlign: 'center', maxWidth: 400 }}>
        <RocketLaunchIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Demo 專案
        </Typography>
        <Typography variant="body2" color="text.secondary">
          AI 將依據規格書自動建立頁面與功能
        </Typography>
      </Paper>
    </Box>
  )
}
