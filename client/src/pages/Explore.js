import { Box, Typography } from '@mui/material'
import React from 'react'
import CardContainer from '../components/CardContainer'
import Search from '../components/Search'

const Explore = () => {
    return (
        <>
            <Box>
                <Search />
            </Box>
            <CardContainer />
        </>
    )
}

export default Explore
