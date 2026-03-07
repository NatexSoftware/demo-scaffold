# Mock 假資料目錄

此目錄存放所有前端假資料，用於 UI 開發與原型展示，**不依賴後端 API**。

## 規則

| 規則 | 說明 |
|------|------|
| 使用 `@faker-js/faker` 產生資料 | 保持資料真實感 |
| 每個檔案設定固定 `faker.seed()` | 確保每次資料一致，方便截圖/demo |
| 型別與假資料放同一檔案 | 減少跳轉，方便 PM 理解結構 |

## 新增假資料步驟

1. 在此目錄新增 `yourFeature.ts`
2. 定義 interface（資料結構）
3. 用 faker 產生陣列資料
4. 在 `index.ts` 統一 export

## 範例

```ts
// src/mock/orders.ts
import { faker } from '@faker-js/faker/locale/zh_TW'

export interface Order { id: string; amount: number; status: string }

faker.seed(200) // 每個檔案用不同 seed

export const mockOrders: Order[] = Array.from({ length: 15 }, () => ({
  id: faker.string.uuid(),
  amount: faker.number.int({ min: 100, max: 99999 }),
  status: faker.helpers.arrayElement(['pending', 'shipped', 'delivered']),
}))
```
