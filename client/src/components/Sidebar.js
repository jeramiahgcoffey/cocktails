import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Switch,
    Divider,
} from '@mui/material'
import Add from '@mui/icons-material/AddCircle'
import ModeNight from '@mui/icons-material/ModeNight'
import ListIcon from '@mui/icons-material/List'
import GridView from '@mui/icons-material/GridView'
import LocalBar from '@mui/icons-material/LocalBar'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'

const Sidebar = () => {
    const {
        user,
        toggleLoginModal,
        darkMode,
        toggleDarkMode,
        selectedIndex,
        setSelectedIndex,
    } = useAppContext()

    const navigate = useNavigate()

    return (
        <Box sx={{ width: '280px' }}>
            <List sx={{ marginTop: 5 }}>
                <ListItem disablePadding selected={selectedIndex === 0}>
                    <ListItemButton
                        sx={{ padding: '20px 20px' }}
                        onClick={() => {
                            navigate('/')
                            setSelectedIndex(0)
                        }}
                    >
                        <ListItemIcon>
                            <GridView />
                        </ListItemIcon>
                        <ListItemText primary='Explore' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding selected={selectedIndex === 1}>
                    <ListItemButton
                        sx={{ padding: '20px 20px' }}
                        onClick={() =>
                            user
                                ? (navigate('/user/lists'), setSelectedIndex(1))
                                : toggleLoginModal()
                        }
                    >
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary='My Lists' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding selected={selectedIndex === 2}>
                    <ListItemButton
                        sx={{ padding: '20px 20px' }}
                        onClick={() =>
                            user
                                ? (navigate('/user/drinks'),
                                  setSelectedIndex(2))
                                : toggleLoginModal()
                        }
                    >
                        <ListItemIcon>
                            <LocalBar />
                        </ListItemIcon>
                        <ListItemText primary='My Drinks' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding selected={selectedIndex === 3}>
                    <ListItemButton
                        sx={{ padding: '20px 20px' }}
                        onClick={() =>
                            user
                                ? (navigate('/user/post'), setSelectedIndex(3))
                                : toggleLoginModal()
                        }
                    >
                        <ListItemIcon>
                            <Add />
                        </ListItemIcon>
                        <ListItemText primary='Post a Recipe' />
                    </ListItemButton>
                </ListItem>
                <Divider variant='middle' />
                <ListItem disablePadding>
                    <ListItemButton sx={{ padding: '20px 20px' }}>
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch
                            edge='end'
                            checked={darkMode}
                            onChange={() => toggleDarkMode((prev) => !prev)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar
