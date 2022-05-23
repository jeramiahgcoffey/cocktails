import { useAppContext } from '../../context/appContext'
import Alert from '@mui/material/Alert'

const AlertMessage = () => {
  const { alertType, alertText } = useAppContext()

  return (
    <div>
      <Alert severity={alertType} sx={{ textTransform: 'capitalize' }}>
        {alertText}
      </Alert>
    </div>
  )
}

export default AlertMessage
