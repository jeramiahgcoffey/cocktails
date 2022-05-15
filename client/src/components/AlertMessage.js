import Alert from '@mui/material/Alert'
import { useAppContext } from '../context/appContext'

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
