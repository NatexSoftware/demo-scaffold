import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'

dayjs.locale('zh-tw')

export const formatDate = (date: string | Date, fmt = 'YYYY/MM/DD') =>
  dayjs(date).format(fmt)

export const formatDateTime = (date: string | Date) =>
  dayjs(date).format('YYYY/MM/DD HH:mm')

export const formatCurrency = (amount: number, currency = 'TWD') =>
  new Intl.NumberFormat('zh-TW', { style: 'currency', currency }).format(amount)

export const formatNumber = (num: number) =>
  new Intl.NumberFormat('zh-TW').format(num)
