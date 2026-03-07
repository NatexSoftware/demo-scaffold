import { useState, useMemo } from 'react'

interface UsePaginationOptions {
  defaultPage?: number
  defaultPageSize?: number
}

/**
 * 前端分頁 hook（對假資料陣列使用）
 */
export function usePagination<T>(
  data: T[],
  { defaultPage = 1, defaultPageSize = 10 }: UsePaginationOptions = {}
) {
  const [page, setPage] = useState(defaultPage)
  const [pageSize, setPageSize] = useState(defaultPageSize)

  const total = data.length
  const totalPages = Math.ceil(total / pageSize)

  const paginatedData = useMemo(
    () => data.slice((page - 1) * pageSize, page * pageSize),
    [data, page, pageSize]
  )

  const goToPage = (p: number) => setPage(Math.max(1, Math.min(p, totalPages)))

  return {
    data: paginatedData,
    page,
    pageSize,
    total,
    totalPages,
    setPage: goToPage,
    setPageSize: (size: number) => { setPageSize(size); setPage(1) },
    hasPrev: page > 1,
    hasNext: page < totalPages,
  }
}
