// ============================================================
// 範例：型別定義（src/types/user.ts）
// 每個領域獨立一檔，在 types/index.ts 中 barrel export
// ============================================================

export type UserRole = 'admin' | 'editor' | 'viewer'
export type UserStatus = 'active' | 'inactive'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  avatar: string
  createdAt: string
}

// --- types/index.ts 中追加 ---
// export type { User, UserRole, UserStatus } from './user'
