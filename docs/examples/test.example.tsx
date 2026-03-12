// ============================================================
// 範例：測試檔案（src/pages/__tests__/UsersPage.test.tsx）
// 根據規格書的「預期行為」撰寫，不依賴實作細節
// ============================================================
//
// 【測試原則】
// - 測試從規格書需求出發，描述「使用者應該看到什麼、能做什麼」
// - 不測試實作細節（不測 state 變化、不測 internal function）
// - 使用 screen.getByRole / getByText 等語義查詢
// - 每個頁面至少測：渲染成功、關鍵資料顯示、主要互動

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

// ── 測試用 wrapper（提供 QueryClient + Router + Theme）──────
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/theme'

function createTestWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MemoryRouter>{children}</MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    )
  }
}

// ── Mock service 層 ──────────────────────────────────────────
// 注意：mock 的是 service，不是 mock data
vi.mock('@/services/userService', () => ({
  getUsers: vi.fn().mockResolvedValue([
    { id: '1', name: '王小明', email: 'ming@example.com', role: 'admin', status: 'active', avatar: '' },
    { id: '2', name: '李小華', email: 'hua@example.com', role: 'viewer', status: 'inactive', avatar: '' },
  ]),
}))

// ── 引入待測頁面 ────────────────────────────────────────────
import UsersPage from '@/pages/UsersPage'

describe('UsersPage', () => {
  it('顯示頁面標題', async () => {
    render(<UsersPage />, { wrapper: createTestWrapper() })

    // 等待資料載入完成
    expect(await screen.findByText('使用者管理')).toBeInTheDocument()
  })

  it('顯示使用者數量統計', async () => {
    render(<UsersPage />, { wrapper: createTestWrapper() })

    expect(await screen.findByText(/共 2 位使用者/)).toBeInTheDocument()
  })

  it('在表格中顯示使用者資料', async () => {
    render(<UsersPage />, { wrapper: createTestWrapper() })

    // 等待表格渲染
    expect(await screen.findByText('王小明')).toBeInTheDocument()
    expect(screen.getByText('李小華')).toBeInTheDocument()
    expect(screen.getByText('ming@example.com')).toBeInTheDocument()
  })

  it('顯示狀態標籤', async () => {
    render(<UsersPage />, { wrapper: createTestWrapper() })

    expect(await screen.findByText('啟用')).toBeInTheDocument()
    expect(screen.getByText('停用')).toBeInTheDocument()
  })

  it('有新增使用者按鈕', async () => {
    render(<UsersPage />, { wrapper: createTestWrapper() })

    expect(await screen.findByRole('button', { name: /新增使用者/ })).toBeInTheDocument()
  })
})

// ============================================================
// 【測試檔案命名與位置】
// - 頁面測試：src/pages/__tests__/XxxPage.test.tsx
// - Service 測試：src/services/__tests__/xxxService.test.ts
// - Hook 測試：src/hooks/__tests__/useXxx.test.ts
//
// 【常用 Testing Library 查詢】
// screen.getByRole('button', { name: /送出/ })    ← 按鈕
// screen.getByText('標題文字')                     ← 文字
// screen.getByLabelText('姓名')                    ← 表單欄位
// screen.getByPlaceholderText('搜尋...')            ← 搜尋框
// screen.findByText('非同步內容')                   ← 等待出現（回傳 Promise）
//
// 【測試互動】
// const user = userEvent.setup()
// await user.click(screen.getByRole('button', { name: /刪除/ }))
// await user.type(screen.getByLabelText('姓名'), '王小明')
// ============================================================
