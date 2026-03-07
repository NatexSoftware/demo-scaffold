import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <Typography variant="h1" fontWeight={700} color="text.disabled">404</Typography>
      <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>找不到此頁面</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>您所尋找的頁面不存在或已被移除。</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>回到首頁</Button>
    </Box>
  )
}
