import { useAppContext } from '../../context/appContext'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

const TheModal = ({ comp }) => {
  const { modalOpen, toggleModal } = useAppContext()

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={modalOpen}
        onClose={toggleModal}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200
        }}
      >
        <Fade in={modalOpen}>
          <Box>{comp}</Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default TheModal
