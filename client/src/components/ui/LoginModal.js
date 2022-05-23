import { useAppContext } from '../../context/appContext'
import Register from '../Register'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

const RegisterModal = () => {
  const { loginModalOpen, toggleLoginModal } = useAppContext()

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={loginModalOpen}
        onClose={toggleLoginModal}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginModalOpen}>
          <Box>
            <Register />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default RegisterModal
