import { Box, Grid } from '@mui/material'
import CocktailCard from './CocktailCard'
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'

const CardContainer = () => {
    const { getAllDrinks, drinks } = useAppContext()
    useEffect(() => {
        getAllDrinks()
    }, [])

    return (
        <Box display='flex' sx={{ alignItems: 'flex-start', height: '100vh' }}>
            <Grid container spacing={4} direction='row' alignItems='flex-end'>
                {drinks.map((drink, index) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                            <CocktailCard drink={drink} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default CardContainer
