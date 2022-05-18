import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import LoginModal from './LoginModal'
import Sidebar from './Sidebar'

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <LoginModal />
            <Stack direction='row'>
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
                <Box padding={5} bgcolor='grey.100'>
                    <Outlet />
                </Box>
            </Stack>
        </>
    )
}

export default SharedLayout
