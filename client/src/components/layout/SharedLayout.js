import { useAppContext } from '../../context/appContext'
import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import TheModal from '../ui/TheModal'
import Sidebar from './Sidebar'
import Register from '../Register'

const SharedLayout = () => {
  const { darkMode } = useAppContext()

  return (
    <>
      <Navbar />
      <TheModal comp={<Register />} />
      <Stack
        direction='row'
        bgcolor={'background.default'}
        color={'text.primary'}
      >
        <Box
          sx={{
            minWidth: 280,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box position='fixed'>
            <Sidebar />
          </Box>
        </Box>
        <Box
          padding={5}
          bgcolor={!darkMode ? 'grey.200' : 'grey.900'}
          width='100%'
          // height='100vh'
        >
          <Outlet />
        </Box>
      </Stack>
    </>
  )
}

export default SharedLayout
