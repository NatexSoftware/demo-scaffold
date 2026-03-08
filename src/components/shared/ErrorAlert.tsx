import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'

interface ErrorAlertProps {
  title?: string
  message: string
  onRetry?: () => void
}

export default function ErrorAlert({ title = '發生錯誤', message, onRetry }: ErrorAlertProps) {
  return (
    <Alert
      severity="error"
      action={onRetry && (
        <Button color="inherit" size="small" onClick={onRetry}>重試</Button>
      )}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  )
}
