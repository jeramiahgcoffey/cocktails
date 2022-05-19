import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Register from '../components/Register'

const Post = () => {
    return (
        <Box>
            <Paper elevation={12}>
                <Typography variant='h2'>Post a drink recipe</Typography>
            </Paper>
        </Box>
    )
}

export default Post
