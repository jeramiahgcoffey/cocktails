import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Stack direction='row'>
                <Box
                    sx={{
                        bgcolor: 'red',
                        minWidth: 250,
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    <Box position='fixed'>
                        <Sidebar />
                    </Box>
                </Box>
                <Box margin={5}>
                    <Outlet />
                </Box>
            </Stack>
        </>
    )
}

export default SharedLayout
