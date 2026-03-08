import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

interface LoadingScreenProps {
  message?: string
}

export default function LoadingScreen({ message = '載入中...' }: LoadingScreenProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 320, gap: 2 }}>
      <CircularProgress />
      <Typography variant="body2" color="text.secondary">{message}</Typography>
    </Box>
  )
}
