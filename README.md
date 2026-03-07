# Demo Scaffold

> Natex Hub 的 Demo 腳手架模板。由 Natex Hub 自動複製，Claude Code 依規格書開發，最終建置部署。

---

## 目錄結構

```
demo-scaffold/
├── docs/
│   ├── specs/                  # 規格書
│   │   ├── _template.md        # 規格書模板
│   │   └── example-users.md    # 範例規格書
│   └── wireframes/             # 線框圖、截圖
│
├── src/
│   ├── components/
│   │   ├── ui/                 # 通用 UI 元件
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── index.ts
│   │   └── layout/             # 版面元件
│   │       ├── Layout.tsx
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   │
│   ├── mock/                   # 假資料（不依賴後端）
│   │   ├── README.md
│   │   ├── users.ts
│   │   ├── products.ts
│   │   └── index.ts
│   │
│   ├── pages/                  # 頁面元件
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── hooks/                  # 共用 hooks
│   │   ├── usePagination.ts
│   │   └── useDisclosure.ts
│   │
│   ├── store/                  # Zustand 全域狀態
│   │   └── useAppStore.ts
│   │
│   ├── types/                  # TypeScript 型別
│   │   └── index.ts
│   │
│   ├── utils/                  # 工具函數
│   │   ├── cn.ts
│   │   └── format.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── CLAUDE.md                   # AI 工作指引
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | React 18 + TypeScript |
| 建構工具 | Vite |
| 樣式 | Tailwind CSS |
| 路由 | React Router v6 |
| 狀態管理 | Zustand |
| 表單 | React Hook Form |
| 假資料 | @faker-js/faker |
| Icon | lucide-react |
| 日期 | dayjs |

---

## 內建 UI 元件

| 元件 | 用途 |
|------|------|
| `Button` | 按鈕，支援 variant（primary/secondary/outline/ghost/danger）與 size |
| `Input` | 輸入框，支援 label、error、hint |
| `Badge` | 狀態標籤，支援 variant（success/warning/danger/info） |
| `Modal` | 對話框，支援 size |
| `Table` | 資料表格，支援自訂 render |
| `Pagination` | 分頁，搭配 `usePagination` hook 使用 |

---

## 內建 Hooks

| Hook | 用途 |
|------|------|
| `usePagination(data)` | 前端陣列分頁 |
| `useDisclosure()` | 控制 Modal/Drawer 開關 |

---

## 常用指令

```bash
npm install      # 安裝套件
npm run dev      # 啟動開發伺服器
npm run build    # 建構正式版本
npm run preview  # 預覽建構結果
```
