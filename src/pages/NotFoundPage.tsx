import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-8xl font-bold text-gray-200">404</p>
      <h1 className="text-2xl font-bold text-gray-900 mt-4">找不到此頁面</h1>
      <p className="text-gray-500 mt-2 mb-6">您所尋找的頁面不存在或已被移除。</p>
      <Button onClick={() => navigate('/')}>回到首頁</Button>
    </div>
  )
}
