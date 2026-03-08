import { create } from 'zustand'

interface AppStore {
  // 側邊欄
  sidebarOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void

  // 全域 loading（用於阻擋式操作，如表單提交）
  globalLoading: boolean
  setGlobalLoading: (loading: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  globalLoading: false,
  setGlobalLoading: (loading) => set({ globalLoading: loading }),
}))
