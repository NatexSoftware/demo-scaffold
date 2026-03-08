// ============================================================
// 範例：假資料（src/mock/users.ts）
// 型別從 @/types import，不在此定義
// 使用 faker 並設固定 seed 確保一致性
// ============================================================

import { faker } from '@faker-js/faker/locale/zh_TW'
import type { User, UserRole, UserStatus } from '@/types'

faker.seed(42)

export const mockUsers: User[] = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement<UserRole>(['admin', 'editor', 'viewer']),
  status: faker.helpers.arrayElement<UserStatus>(['active', 'inactive']),
  avatar: faker.image.avatar(),
  createdAt: faker.date.past({ years: 2 }).toISOString(),
}))

// --- mock/index.ts 中追加 ---
// export { mockUsers } from './users'
