# Demo Scaffold — AI 開發規範

## 專案定位

Natex Hub 的 Demo 腳手架。AI 讀取規格書後自動開發頁面，build 後部署。
產出的程式碼需方便工程師日後接手，替換假資料為真實 API。

**你的任務依照 prompt 指定的模式執行（測試產出模式 或 開發模式）。**

## 技術棧（固定，禁止新增套件）

- React 18 + TypeScript (strict) + Vite
- MUI v5 + @mui/icons-material + @mui/x-data-grid + @mui/x-date-pickers
- TanStack Query v5（資料取得）
- Axios（HTTP client）
- React Router v6
- Zustand（全域狀態）
- React Hook Form（表單）
- notistack（Toast 通知）
- @faker-js/faker (zh_TW)（假資料）
- dayjs (zh-tw)（日期處理）
- Vitest + @testing-library/react + @testing-library/user-event（測試）

## 目錄結構

```
src/
├── api/
│   └── client.ts             ← axios instance（固定，不可修改）
├── components/
│   ├── layout/               ← Layout, Header, Sidebar（固定骨架，不可刪除）
│   ├── shared/               ← 跨頁面共用元件（已提供，可新增）
│   │   ├── LoadingScreen.tsx
│   │   ├── PageHeader.tsx
│   │   ├── ConfirmDialog.tsx
│   │   ├── ErrorAlert.tsx
│   │   └── index.ts
│   └── ErrorBoundary.tsx     ← 全域錯誤邊界（固定，不可修改）
├── constants/
│   ├── nav.tsx               ← 導覽選單項目（AI 在此追加）
│   └── index.ts
├── hooks/                    ← 自定 hooks，命名 use{Name}.ts
│   └── useDisclosure.ts
├── mock/                     ← 假資料模組（AI 依規格書建立）
│   └── index.ts              ← barrel export
├── pages/                    ← 頁面元件，命名 {Feature}Page.tsx
│   ├── __tests__/            ← 頁面測試，命名 {Feature}Page.test.tsx
│   ├── HomePage.tsx          ← 首頁（AI 可覆寫）
│   └── NotFoundPage.tsx
├── services/                 ← 資料存取層（AI 依規格書建立）
│   └── __tests__/            ← service 測試
├── store/                    ← Zustand store，命名 use{Name}Store.ts
│   └── useAppStore.ts
├── types/                    ← TypeScript 型別（AI 依規格書建立）
│   ├── common.ts             ← 通用型別（固定）
│   └── index.ts              ← barrel export
├── utils/
│   └── format.ts             ← 格式化工具（固定，不可修改）
├── App.tsx                   ← 路由（AI 在此追加）
├── main.tsx                  ← 入口（固定，不可修改）
├── queryClient.ts            ← TanStack Query 設定（固定，不可修改）
├── theme.ts                  ← MUI 主題（可修改色彩）
└── index.css
```

## 範例參考

完整的開發範例在 `docs/examples/` 目錄中：
- `types.example.ts` — 型別定義範例
- `mock.example.ts` — 假資料範例
- `service.example.ts` — service 層範例
- `page.example.tsx` — 頁面元件範例（含 useQuery、DataGrid、shared 元件）
- `test.example.tsx` — 測試範例（含 wrapper 設定、mock service、頁面測試）

**開始開發前請先閱讀所有範例檔案。**

## 開發模式（由 prompt 指定，嚴格遵守）

### 模式 A：測試產出模式

此模式只產出測試，不寫任何功能 code。

1. 讀取 `docs/specs/` 中的規格書，確認頁面清單、資料欄位、功能需求
2. 閱讀 `docs/examples/` 中所有範例檔案（特別是 `test.example.tsx`）
3. 在 `src/types/` 建立型別定義檔，並在 `types/index.ts` 中 export
4. 根據規格書描述的「預期行為」，為每個頁面撰寫測試檔案（`src/pages/__tests__/XxxPage.test.tsx`）
5. 為每個 service 撰寫測試檔案（`src/services/__tests__/xxxService.test.ts`）
6. 確認 `npm run build` 通過（型別定義需正確）

**此模式禁止：** 建立 mock/、services/、pages/ 的功能檔案。只建立 types/ 和 __tests__/ 下的測試檔案。

### 模式 B：開發模式

此模式實作功能，讓所有測試通過。

1. 閱讀已有的測試檔案（`src/pages/__tests__/`、`src/services/__tests__/`），理解預期行為
2. 閱讀 `docs/specs/` 中的規格書，補充 UI 細節（測試不會描述視覺樣式）
3. 閱讀 `docs/examples/` 中所有範例檔案
4. 在 `src/mock/` 建立假資料模組，並在 `mock/index.ts` 中 export
5. 在 `src/services/` 建立 service 層
6. 在 `src/pages/` 建立頁面元件
7. 在 `src/App.tsx` 新增 Route（使用 `lazy` + `Suspense`）
8. 在 `src/constants/nav.tsx` 的 `NAV_ITEMS` 追加導覽項目
9. 執行 `npm run test` 確認全部測試通過（若失敗自行修正）
10. 執行 `npm run build` 確認通過（若失敗自行修正）

### 模式 C：修改模式

修改既有功能時使用。

1. 執行 `npm run test` 確認現有測試全部通過
2. 依照指令修改功能
3. 更新受影響的測試
4. 執行 `npm run test` 確認全部通過
5. 執行 `npm run build` 確認通過

## 資料流架構

```
types/  →  mock/  →  services/  →  pages/（useQuery）
```

**嚴禁跨層引用：**
- `types/` 不引用任何其他層
- `mock/` 只引用 `types/`
- `services/` 引用 `types/` 和 `mock/`
- `pages/` 引用 `types/`、`services/`、`components/`
- **pages 禁止直接 import `@/mock/*`**

## 型別定義規範

每個領域獨立一檔，在 `types/index.ts` 中 barrel export：

```ts
// src/types/order.ts
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface Order {
  id: string
  orderNo: string
  customerName: string
  status: OrderStatus
  totalAmount: number
  createdAt: string
}
```

```ts
// types/index.ts 追加
export type { Order, OrderStatus } from './order'
```

`types/common.ts` 中已定義 `ApiResponse`、`PaginatedResponse`、`SelectOption` 等通用型別。

## 假資料規範

- `import { faker } from '@faker-js/faker/locale/zh_TW'`
- 型別從 `@/types` import，**不在 mock 檔案中定義型別**
- 每個模組設不同 `faker.seed()`（從 42 開始，新模組遞增）
- 陣列長度 15~30 筆
- 若使用者有提供 JSON 假資料，嚴格使用其欄位名稱與結構
- 在 `mock/index.ts` 中 export

## Service 層規範

```ts
// src/services/orderService.ts
import type { Order } from '@/types'
import { mockOrders } from '@/mock'

export async function getOrders(): Promise<Order[]> {
  return mockOrders
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  return mockOrders.find((o) => o.id === id)
}
```

## 頁面使用 TanStack Query

**必須**使用 `useQuery` 取資料，禁止手動 `useState + useEffect`：

```tsx
import { useQuery } from '@tanstack/react-query'
import { LoadingScreen, ErrorAlert, PageHeader } from '@/components/shared'
import { getOrders } from '@/services/orderService'

export default function OrdersPage() {
  const { data: orders = [], isLoading, error, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorAlert message="載入訂單失敗" onRetry={refetch} />

  return (
    <div>
      <PageHeader title="訂單管理" subtitle={`共 ${orders.length} 筆`} />
      {/* ... */}
    </div>
  )
}
```

queryKey 命名：列表 `['orders']`、單一 `['order', id]`、篩選 `['orders', { status }]`

## 路由追加規範

在 App.tsx 中使用 `lazy` + `Suspense`：

```tsx
const OrdersPage = lazy(() => import('@/pages/OrdersPage'))

// 在 Routes 中追加
<Route path="orders" element={<Suspense fallback={<LoadingScreen />}><OrdersPage /></Suspense>} />
```

## 導覽選單追加

在 `src/constants/nav.tsx` 的 `NAV_ITEMS` 陣列追加：

```tsx
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

// 在 NAV_ITEMS 中追加
{ to: '/orders', label: '訂單管理', icon: <ShoppingCartIcon /> },
```

## 共用元件

| 元件 | import 路徑 | 用途 |
|------|-------------|------|
| `PageHeader` | `@/components/shared` | 頁面標題 + 副標題 + 右側操作按鈕 |
| `LoadingScreen` | `@/components/shared` | 全頁載入中 |
| `ErrorAlert` | `@/components/shared` | 錯誤提示 + 重試按鈕 |
| `ConfirmDialog` | `@/components/shared` | 確認對話框（刪除等危險操作） |

## Toast 通知

使用 `notistack` 的 `useSnackbar`：

```tsx
import { useSnackbar } from 'notistack'

const { enqueueSnackbar } = useSnackbar()
enqueueSnackbar('新增成功', { variant: 'success' })
enqueueSnackbar('刪除失敗', { variant: 'error' })
```

## 日期選擇器

使用 `@mui/x-date-pickers`（已配好 dayjs zh-tw locale）：

```tsx
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

<DatePicker label="選擇日期" value={date} onChange={setDate} />
```

## 佈局與間距規範（重要）

Layout 已處理：RWD padding（手機 16px → 平板 24px → 桌面 24px）、Sidebar 手機覆蓋式/桌面推擠式。內容區無 maxWidth 限制，會撐滿可用寬度。

**頁面禁止自行處理的事：**
- 不可在頁面最外層加 padding、margin、Container、maxWidth
- 不可修改 Layout / Sidebar / Header 元件

**頁面間距規則：**
- 根元素用 `<Stack spacing={3}>` 統一垂直間距
- 統計卡片用 `<Grid container spacing={2}>`
- Card 內容用 `CardContent`（預設 padding），表格類用 `sx={{ p: 0, '&:last-child': { pb: 0 } }}`
- 表單欄位用 `<Stack spacing={2}>` 或 `<Grid container spacing={2}>`

**DataGrid 規則：**
- 欄位用 `flex: 1` + `minWidth`（防手機擠壓），不可只用固定 `width`
- 必須設 `autoHeight` + `disableRowSelectionOnClick`
- 外層 Card 內容 padding 設 0

**範例結構：**
```tsx
export default function OrdersPage() {
  return (
    <Stack spacing={3}>
      <PageHeader title="訂單管理" subtitle="共 N 筆" action={<Button>新增</Button>} />
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}><StatCard /></Grid>
      </Grid>
      <Card>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <DataGrid ... />
        </CardContent>
      </Card>
    </Stack>
  )
}
```

## MUI 使用規範

- 元件：Button, TextField, Select, Chip, Dialog, Card, Typography, Box, Stack, Paper, IconButton, Grid
- 資料表格：`@mui/x-data-grid` 的 `DataGrid`
- 圖標：`@mui/icons-material`
- 樣式：使用 `sx` prop
- 所有 UI 文字必須繁體中文

## 全域狀態（Zustand）

`useAppStore` 已提供 sidebar 開關和全域 loading。
新增業務狀態時建立獨立 store：

```ts
// src/store/useCartStore.ts
import { create } from 'zustand'

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
}))
```

## 表單

使用 `react-hook-form`：

```tsx
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'

const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
```

## 追加需求時的規則

若此專案已有既有頁面和功能：
- **不可修改或刪除**既有的 pages、mock、services、types、routes、nav items
- 新增所需的 types → mock → service → page
- 在 App.tsx **追加** route
- 在 constants/nav.tsx **追加**導覽項目
- 在 types/index.ts 和 mock/index.ts **追加** export
- 先閱讀現有 src/ 了解結構

## 測試規範

### 測試檔案位置與命名
- 頁面測試：`src/pages/__tests__/XxxPage.test.tsx`
- Service 測試：`src/services/__tests__/xxxService.test.ts`

### 測試撰寫原則
- **從規格書需求出發**，描述「使用者應該看到什麼、能做什麼」
- 不測試實作細節（不測 state 變化、不測 internal function）
- 使用 `screen.getByRole` / `getByText` / `findByText` 等語義查詢
- 每個頁面至少測：渲染成功、關鍵資料顯示、主要互動
- 每個 service 至少測：回傳正確資料型別、查詢功能

### 測試 Wrapper
每個測試檔案需提供包含 QueryClient + Router + Theme 的 wrapper：

```tsx
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
```

### Mock Service
測試中 mock 的是 service 層（不是 mock data）：

```tsx
vi.mock('@/services/orderService', () => ({
  getOrders: vi.fn().mockResolvedValue([
    { id: '1', orderNo: 'ORD-001', customerName: '測試客戶', status: 'pending', totalAmount: 1000, createdAt: '2024-01-01' },
  ]),
}))
```

## 禁止事項

- 不呼叫真實 API，資料全來自 `src/mock/`（透過 service 層）
- 不安裝新套件
- 不修改：config 檔、utils/、api/client.ts、main.tsx、queryClient.ts、ErrorBoundary.tsx、Layout.tsx、Header.tsx、Sidebar.tsx
- 不殘留 `console.log`
- 頁面不可直接 import `@/mock/*`
- 頁面不可用 `useState + useEffect` 取資料，必須用 `useQuery`
- 型別不可定義在 mock 檔案中
- 頁面最外層不可加額外 padding、margin、Container（Layout 已處理）

## 完成檢查

### 模式 A（測試產出）
- [ ] `npm run build` 零錯誤（型別定義正確）
- [ ] 每個頁面有對應的測試檔案
- [ ] 每個 service 有對應的測試檔案
- [ ] 測試描述的是規格書的預期行為，不是實作細節
- [ ] 未建立 mock/、services/、pages/ 的功能檔案

### 模式 B（開發）
- [ ] `npm run test` 全部通過
- [ ] `npm run build` 零錯誤
- [ ] 每個領域有完整的：types → mock → service → page
- [ ] 路由、導覽、假資料、service、頁面五者對應完整
- [ ] 無 unused imports / variables
- [ ] 所有頁面透過 useQuery + service 取資料
- [ ] 型別定義在 types/，mock 和 service 都從 types/ import
- [ ] 頁面根元素用 `<Stack spacing={3}>`，無多餘外層 padding
- [ ] DataGrid 欄位有 `flex` + `minWidth`，外層 CardContent p: 0
- [ ] 手機/桌面佈局合理，無內容溢出或過度留白

### 模式 C（修改）
- [ ] `npm run test` 全部通過（含更新後的測試）
- [ ] `npm run build` 零錯誤
