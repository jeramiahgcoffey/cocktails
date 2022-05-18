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

const Sidebar = () => {
    return (
        <Box sx={{ width: '280px' }}>
            <List sx={{ marginTop: 5 }}>
                <ListItem disablePadding>
                    <ListItemButton sx={{ padding: '20px 20px' }}>
                        <ListItemIcon>
                            <GridView />
                        </ListItemIcon>
                        <ListItemText primary='Explore' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ padding: '20px 20px' }}>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary='My Lists' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ padding: '20px 20px' }}>
                        <ListItemIcon>
                            <LocalBar />
                        </ListItemIcon>
                        <ListItemText primary='My Drinks' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ padding: '20px 20px' }}>
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
                        <Switch edge='end' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar
