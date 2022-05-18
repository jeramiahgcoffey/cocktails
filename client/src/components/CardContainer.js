import { Box, Grid } from '@mui/material'
import React from 'react'
import CocktailCard from './CocktailCard'

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const CardContainer = () => {
    return (
        <div>
            <Box>
                <Grid container spacing={2} justifyContent='center'>
                    {arr.map((card, index) => {
                        return (
                            <Grid item>
                                <CocktailCard key={index} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default CardContainer
