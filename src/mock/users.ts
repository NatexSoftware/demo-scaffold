import { faker } from '@faker-js/faker/locale/zh_TW'

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  status: 'active' | 'inactive'
  avatar: string
  createdAt: string
}

// 固定 seed 確保每次產生資料一致
faker.seed(42)

export const mockUsers: User[] = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(['admin', 'editor', 'viewer'] as const),
  status: faker.helpers.arrayElement(['active', 'inactive'] as const),
  avatar: faker.image.avatar(),
  createdAt: faker.date.past({ years: 2 }).toISOString(),
}))
