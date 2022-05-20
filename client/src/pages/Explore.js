import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CardContainer from '../components/CardContainer'
import Search from '../components/Search'
import { useAppContext } from '../context/appContext'

const Explore = () => {
    const { getAllDrinks, drinks } = useAppContext()
    useEffect(() => {
        getAllDrinks()
    }, [])

    return (
        <>
            <Box>
                <Typography variant='h2'>Explore</Typography>
                <Divider />
                <Search />
                <Divider sx={{ marginBottom: 2 }} />
            </Box>
            {drinks.length ? (
                <CardContainer drinks={drinks} />
            ) : (
                <Box sx={{ height: '100vh' }}></Box>
            )}
        </>
    )
}

export default Explore
