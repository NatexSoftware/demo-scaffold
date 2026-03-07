import { faker } from '@faker-js/faker/locale/zh_TW'

export interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'active' | 'inactive' | 'discontinued'
  imageUrl: string
  description: string
  createdAt: string
}

faker.seed(100)

const CATEGORIES = ['電子產品', '服飾', '食品飲料', '居家生活', '運動戶外', '美妝保養']

export const mockProducts: Product[] = Array.from({ length: 30 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  category: faker.helpers.arrayElement(CATEGORIES),
  price: Number(faker.commerce.price({ min: 100, max: 50000 })),
  stock: faker.number.int({ min: 0, max: 500 }),
  status: faker.helpers.arrayElement(['active', 'inactive', 'discontinued'] as const),
  imageUrl: faker.image.url({ width: 400, height: 400 }),
  description: faker.commerce.productDescription(),
  createdAt: faker.date.past({ years: 1 }).toISOString(),
}))
