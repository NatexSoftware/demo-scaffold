import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'
import { LoadingScreen } from '@/components/shared'

// 路由懶載入：每個頁面獨立 chunk
const HomePage = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// AI 新增頁面時，在此 import 並加入 <Route>
// 範例：const UsersPage = lazy(() => import('@/pages/UsersPage'))

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingScreen />}>
                <HomePage />
              </Suspense>
            }
          />
          {/* AI 追加路由區域 */}
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
