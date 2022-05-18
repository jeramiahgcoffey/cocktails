import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

const Sidebar = () => {
    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary='Inbox' />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary='Inbox' />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary='Inbox' />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary='Inbox' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar
