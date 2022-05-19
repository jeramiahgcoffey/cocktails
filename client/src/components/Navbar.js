import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import ModeNight from '@mui/icons-material/ModeNight'
import { ListItemIcon, Switch } from '@mui/material'

const Navbar = () => {
    const {
        logoutUser,
        user,
        toggleLoginModal,
        setSelectedIndex,
        darkMode,
        toggleDarkMode,
    } = useAppContext()

    const pages = [
        { page: 'Explore', path: '/', index: 0 },
        { page: 'My Lists', path: '/user/lists', index: 1 },
        { page: 'My Drinks', path: '/user/drinks', index: 2 },
        { page: 'Post a Recipe', path: '/user/post', index: 3 },
    ]
    const settings = user
        ? ['Profile', 'Account', 'Dashboard', 'Logout']
        : ['Login']
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = (path, index) => {
        setAnchorElNav(null)
        setSelectedIndex(index)
        user ? navigate(path) : toggleLoginModal()
    }

    const handleCloseUserMenu = (e) => {
        const id = e.target.id
        switch (id) {
            case 'Logout':
                logoutUser()
                break
            case 'Login':
                toggleLoginModal()
                break
            default:
                break
        }
        setAnchorElUser(null)
    }

    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar
                    sx={{ justifyContent: 'space-between' }}
                    disableGutters
                >
                    <Box
                        onClick={() => {
                            navigate('/')
                        }}
                        display='flex'
                        alignItems='center'
                        sx={{ cursor: 'pointer' }}
                    >
                        <LocalBarIcon
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        />
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Cocktails
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() =>
                                        handleCloseNavMenu(
                                            page.path,
                                            page.index
                                        )
                                    }
                                >
                                    <Typography textAlign='center'>
                                        {page.page}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <ListItemIcon>
                                    <ModeNight />
                                </ListItemIcon>
                                <Switch
                                    edge='end'
                                    checked={darkMode}
                                    onChange={() =>
                                        toggleDarkMode((prev) => !prev)
                                    }
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                        onClick={() => {
                            console.log('here')
                            navigate('/')
                        }}
                        sx={{
                            cursor: 'pointer',
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            alignItems: 'center',
                        }}
                    >
                        <LocalBarIcon sx={{ mr: 1 }} />
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Cocktails
                        </Typography>
                    </Box>
                    {/* <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            // justifyContent: 'flex-end',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}

                    <Box>
                        <Tooltip title='Open settings'>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt={
                                        user
                                            ? user.firstName.toUpperCase()
                                            : 'User Avatar'
                                    }
                                    src={user ? '/' : ''}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    id={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography
                                        textAlign='center'
                                        sx={{ pointerEvents: 'none' }}
                                    >
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
