// 通用型別定義

/** API 標準回應格式 */
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

/** 分頁參數 */
export interface PaginationParams {
  page: number
  pageSize: number
}

/** 分頁回應 */
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

/** 下拉選項 */
export interface SelectOption<V = string> {
  label: string
  value: V
}

/** 排序方向 */
export type SortOrder = 'asc' | 'desc'

/** 排序參數 */
export interface SortParams<K = string> {
  field: K
  order: SortOrder
}

/** 通用狀態 */
export type Status = 'active' | 'inactive' | 'pending' | 'archived'
