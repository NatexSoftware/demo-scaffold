// ============================================================
// 範例：頁面元件（src/pages/UsersPage.tsx）
// 使用 useQuery 取資料，搭配 shared 元件
// ============================================================
//
// 【佈局規則】
// - Layout 已提供外層 padding 和 maxWidth，頁面不需再加外層容器
// - 頁面根元素直接用 <div> 或 <Stack spacing={3}>
// - 卡片之間用 Stack spacing 或 mb 控制間距，不可自訂大 padding
// - Card 內容用 CardContent（預設 p: 2），表格類用 p: 0
// - 統計卡片用 Grid container spacing={2}
// - 不可在頁面最外層加額外 padding / margin

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add'
import { PageHeader, LoadingScreen, ErrorAlert, ConfirmDialog } from '@/components/shared'
import { getUsers } from '@/services/userService'
import type { User } from '@/types'

const columns: GridColDef<User>[] = [
  {
    field: 'name',
    headerName: '姓名',
    flex: 1,
    minWidth: 140,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar src={params.row.avatar} sx={{ width: 28, height: 28 }}>
          {params.row.name[0]}
        </Avatar>
        <span>{params.value}</span>
      </Stack>
    ),
  },
  { field: 'email', headerName: '信箱', flex: 1, minWidth: 180 },
  {
    field: 'role',
    headerName: '角色',
    width: 100,
    renderCell: (params) => <Chip label={params.value} size="small" variant="outlined" />,
  },
  {
    field: 'status',
    headerName: '狀態',
    width: 100,
    renderCell: (params) => (
      <Chip
        label={params.value === 'active' ? '啟用' : '停用'}
        size="small"
        color={params.value === 'active' ? 'success' : 'default'}
      />
    ),
  },
]

export default function UsersPage() {
  const { data: users = [], isLoading, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  const [deleteTarget, setDeleteTarget] = useState<User | null>(null)

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorAlert message="載入使用者失敗" onRetry={refetch} />

  return (
    <Stack spacing={3}>
      <PageHeader
        title="使用者管理"
        subtitle={`共 ${users.length} 位使用者`}
        action={
          <Button variant="contained" startIcon={<AddIcon />}>
            新增使用者
          </Button>
        }
      />

      <Card>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSizeOptions={[10, 25, 50]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            disableRowSelectionOnClick
            autoHeight
            sx={{ border: 0 }}
          />
        </CardContent>
      </Card>

      <ConfirmDialog
        open={!!deleteTarget}
        title="確認刪除"
        message={`確定要刪除「${deleteTarget?.name}」嗎？`}
        confirmColor="error"
        confirmLabel="刪除"
        onConfirm={() => {
          // 呼叫 deleteUser service...
          setDeleteTarget(null)
        }}
        onCancel={() => setDeleteTarget(null)}
      />
    </Stack>
  )
}

// --- App.tsx 中追加路由 ---
// const UsersPage = lazy(() => import('@/pages/UsersPage'))
// <Route path="users" element={<Suspense fallback={<LoadingScreen />}><UsersPage /></Suspense>} />

// --- constants/nav.tsx 中追加 ---
// import PeopleIcon from '@mui/icons-material/People'
// { to: '/users', label: '使用者管理', icon: <PeopleIcon /> },
