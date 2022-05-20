import { Box, Divider, Typography } from '@mui/material'
import Search from '../components/Search'
import CardContainer from '../components/CardContainer'
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'

const MyDrinks = () => {
    const { getUserDrinks, drinks, isLoading } = useAppContext()
    useEffect(() => {
        getUserDrinks()
    }, [])

    return (
        <>
            <Box>
                <Typography variant='h2'>My Drink Recipes</Typography>
                <Divider />
                <Search />
                <Divider sx={{ marginBottom: 2 }} />
            </Box>
            {!drinks.length ? (
                <Box sx={{ height: '100vh' }}>
                    <Typography variant='h4'>
                        You have not posted any recipes yet.
                    </Typography>
                </Box>
            ) : isLoading ? (
                <Box sx={{ height: '100vh' }}>
                    <Typography variant='h3'>Loading...</Typography>
                </Box>
            ) : (
                <CardContainer drinks={drinks} />
            )}
        </>
    )
}

export default MyDrinks
