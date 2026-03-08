import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeout: 30_000,
  headers: { 'Content-Type': 'application/json' },
})

// Request 攔截器：未來可加 token
apiClient.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token')
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Response 攔截器：統一錯誤處理
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 未來可整合 toast 通知
    // if (error.response?.status === 401) { redirect to login }
    return Promise.reject(error)
  },
)

export default apiClient
