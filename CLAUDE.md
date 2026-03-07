# Demo Scaffold — AI 開發規範

## 專案定位

Natex Hub 的 Demo 腳手架。流程：複製模板 → 寫入規格書 → Claude Code 開發 → build → 部署至 Netlify。

**你的任務：讀取規格書 → 建立假資料 → 開發頁面 → 確保 `npm run build` 成功。**

## 技術棧（固定，禁止新增套件）

React 18 + TypeScript (strict) / Vite / MUI (Material UI) v5 / React Router v6 / Zustand / React Hook Form / @faker-js/faker (zh_TW) / @mui/icons-material / @mui/x-data-grid / dayjs (zh-tw)

## 目錄結構

- `src/components/layout/` — Layout、Header、Sidebar（不可刪除）
- `src/pages/` — 每頁一檔，命名 `{Feature}Page.tsx`
- `src/mock/` — 假資料模組，barrel export 於 `index.ts`
- `src/hooks/` — 自定 hooks，命名 `use{Name}.ts`
- `src/store/` — Zustand store，命名 `use{Name}Store.ts`
- `src/types/` — TypeScript 型別
- `src/utils/` — 工具函數 `format`（不可修改）
- `src/theme.ts` — MUI 主題設定（不可修改）

## 開發流程（按順序）

1. 讀取 `docs/specs/` 中的規格書，確認頁面清單、資料欄位、功能需求
2. 在 `src/mock/` 建立假資料（若使用者有提供 JSON，嚴格使用其欄位名稱與結構）
3. 在 `src/pages/` 建立頁面，使用 MUI 元件
4. 在 `src/App.tsx` 新增 Route
5. 在 `Sidebar.tsx` 的 `NAV_ITEMS` 新增主要導覽頁面（詳情頁、404 等子頁面不需要）
6. 驗證：無型別錯誤、無 unused imports

## MUI 使用規範

- 使用 MUI 元件：Button, TextField, Select, Chip, Dialog, Card, Table, Typography, Box, Stack, Paper, IconButton
- 資料表格使用 `@mui/x-data-grid` 的 `DataGrid`
- 圖標使用 `@mui/icons-material`
- 使用 `sx` prop 做小幅樣式調整
- 可修改 `src/theme.ts` 調整色彩以符合規格書需求
- Dialog 取代 Modal、Chip 取代 Badge、TextField 取代 Input
- 所有 UI 文字必須繁體中文

## 假資料規範

- `import { faker } from '@faker-js/faker/locale/zh_TW'`
- 每個模組設不同 `faker.seed()`（users=42, products=100, 新模組遞增）
- 型別定義與假資料放同一檔案
- 陣列長度 15~30 筆
- 在 `src/mock/index.ts` export data 和 type

## 現有 Hooks

- `useDisclosure()` → { isOpen, open, close, toggle }

## 禁止事項

- 不呼叫真實 API，資料全來自 `src/mock/`
- 不安裝新套件
- 不修改 config 檔（vite / tsconfig）和 utils
- 可修改 `src/theme.ts` 的色彩設定以符合規格書需求
- 不殘留 `console.log`

## 完成檢查

- `npm run build` 零錯誤
- 路由、假資料、頁面三者對應完整
- 無 unused imports / variables
