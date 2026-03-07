// ============================================================
// 全域共用型別
// 各功能模組的型別請放在對應的 types/*.ts 中
// ============================================================

export type Status = 'active' | 'inactive' | 'pending' | 'archived'

export type SortOrder = 'asc' | 'desc'

export interface Pagination {
  page: number
  pageSize: number
  total: number
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface SelectOption {
  label: string
  value: string | number
}

// 常用的 Table 欄位定義
export interface TableColumn<T> {
  key: keyof T | string
  title: string
  width?: number | string
  render?: (value: unknown, row: T) => React.ReactNode
}
