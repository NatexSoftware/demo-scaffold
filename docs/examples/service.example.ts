// ============================================================
// 範例：Service 層（src/services/userService.ts）
// 目前回傳假資料，工程師接手後改為 api.get()
// ============================================================

import type { User } from '@/types'
import { mockUsers } from '@/mock'

// --- 目前：假資料 ---

export async function getUsers(): Promise<User[]> {
  return mockUsers
}

export async function getUserById(id: string): Promise<User | undefined> {
  return mockUsers.find((u) => u.id === id)
}

export async function getUsersByStatus(status: User['status']): Promise<User[]> {
  return mockUsers.filter((u) => u.status === status)
}

// --- 工程師接手後改為 ---
//
// import api from '@/api/client'
// import type { User } from '@/types'
//
// export async function getUsers(): Promise<User[]> {
//   const res = await api.get<User[]>('/users')
//   return res.data
// }
//
// export async function getUserById(id: string): Promise<User | undefined> {
//   const res = await api.get<User>(`/users/${id}`)
//   return res.data
// }
