import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 分鐘內不重新取得
      gcTime: 10 * 60 * 1000,         // 10 分鐘後回收快取
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
