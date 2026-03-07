# Demo Scaffold — AI 開發規範

## 專案定位

Natex Hub 的 Demo 腳手架。流程：複製模板 → 寫入規格書 → Claude Code 開發 → build → 部署至 Netlify。

**你的任務：讀取規格書 → 建立假資料 → 開發頁面 → 確保 `npm run build` 成功。**

## 技術棧（固定，禁止新增套件）

React 18 + TypeScript (strict) / Vite / Tailwind CSS / React Router v6 / Zustand / React Hook Form / @faker-js/faker (zh_TW) / lucide-react / dayjs (zh-tw) / clsx + tailwind-merge

## 目錄結構

- `src/components/ui/` — 通用 UI 元件，barrel export 於 `index.ts`
- `src/components/layout/` — Layout、Header、Sidebar（不可刪除）
- `src/pages/` — 每頁一檔，命名 `{Feature}Page.tsx`
- `src/mock/` — 假資料模組，barrel export 於 `index.ts`
- `src/hooks/` — 自定 hooks，命名 `use{Name}.ts`
- `src/store/` — Zustand store，命名 `use{Name}Store.ts`
- `src/types/` — TypeScript 型別
- `src/utils/` — 工具函數 `cn()` / `format`（不可修改）

## 開發流程（按順序）

1. 讀取 `docs/specs/` 中的規格書，確認頁面清單、資料欄位、功能需求
2. 在 `src/mock/` 建立假資料（若使用者有提供 JSON，嚴格使用其欄位名稱與結構）
3. 在 `src/pages/` 建立頁面，優先使用現有 UI 元件
4. 在 `src/App.tsx` 新增 Route
5. 在 `Sidebar.tsx` 的 `NAV_ITEMS` 新增主要導覽頁面（詳情頁、404 等子頁面不需要）
6. 驗證：無型別錯誤、無 unused imports

## 程式碼風格

- 只用 Tailwind class，不寫 inline style，不新增 CSS 檔案
- 動態 class 用 `cn()` 合併
- 使用 `index.css` 中的複合 class：`.card`、`.btn-base`、`.input-base`
- Import 用 `@/` alias，禁止跨層相對路徑
- 包裝 HTML 元素的元件用 `forwardRef` + `displayName`
- 元件 `default export`，型別 `named export`
- Variant/Size 用 `Record<Variant, string>` 映射
- 禁止 `any`，狀態用 union type
- 所有 UI 文字必須繁體中文

## 假資料規範

- `import { faker } from '@faker-js/faker/locale/zh_TW'`
- 每個模組設不同 `faker.seed()`（users=42, products=100, 新模組遞增）
- 型別定義與假資料放同一檔案
- 陣列長度 15~30 筆
- 在 `src/mock/index.ts` export data 和 type

## 現有 UI 元件

- `Button` — variant: primary|secondary|outline|ghost|danger, size: sm|md|lg, loading
- `Input` — label, error, hint
- `Badge` — variant: default|success|warning|danger|info
- `Modal` — isOpen, onClose, title, size: sm|md|lg|xl
- `Table<T>` — columns, data, loading, rowKey
- `Pagination` — page, totalPages, onPageChange

## 現有 Hooks

- `useDisclosure()` → { isOpen, open, close, toggle }
- `usePagination<T>(data)` → { data, page, totalPages, setPage, ... }

## 禁止事項

- 不呼叫真實 API，資料全來自 `src/mock/`
- 不安裝新套件
- 不使用非 Tailwind 樣式方案
- 不修改 config 檔（tailwind / vite / tsconfig）和 utils
- 不修改現有 UI 元件 API（可新增元件）
- 不殘留 `console.log`

## 完成檢查

- `npm run build` 零錯誤
- 路由、假資料、頁面三者對應完整
- 無 unused imports / variables
