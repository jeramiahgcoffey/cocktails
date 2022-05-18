import { Box, Grid } from '@mui/material'
import React from 'react'
import CocktailCard from './CocktailCard'

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const CardContainer = () => {
    return (
        <Box minWidth='100%' display='flex' sx={{ alignItems: 'center' }}>
            <Grid
                container
                spacing={4}
                direction='row'
                // justifyContent='center'
                alignItems='flex-end'
            >
                {arr.map((card, index) => {
                    return (
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <CocktailCard key={index} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default CardContainer
