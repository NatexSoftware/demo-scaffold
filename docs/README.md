# 文件目錄說明

## 目錄結構

```
docs/
├── specs/              ← 功能規格書
│   ├── _template.md    ← 規格書模板（複製這個來用）
│   └── example-*.md   ← 範例規格書
└── wireframes/         ← 線框圖說明文字（可附圖片說明）
```

---

## 如何新增規格書

1. 複製 `docs/specs/_template.md`
2. 重新命名為功能名稱，例如 `order-management.md`
3. 依模板填寫規格
4. 將檔案路徑告知 AI：
   ```
   /read-spec order-management
   ```

---

## 規格書撰寫重點

| 必填項目 | 說明 |
|---------|------|
| 頁面清單 | 列出所有頁面與路由 |
| 資料欄位定義 | 每個欄位的名稱、型別、用途 |
| 功能需求清單 | 以 `- [ ]` 格式條列每項需求 |
| 操作行為 | 說明點擊、互動後的反應 |

---

## 線框圖

`docs/wireframes/` 目錄可放置：
- 截圖（PNG/JPG）
- Figma 連結說明文件
- ASCII 線框圖（用 markdown 描述版面）
