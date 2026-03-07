import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'

// 新增頁面時，在此 import 並加入 <Route>
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* TODO: 依規格書新增路由，例如：
          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<ProductsPage />} />
        */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
