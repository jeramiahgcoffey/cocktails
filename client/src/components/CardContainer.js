import { Container, Grid } from '@mui/material'
import React from 'react'
import CocktailCard from './CocktailCard'

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const CardContainer = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={3} align='center'>
                    {arr.map((card, index) => {
                        return <CocktailCard key={index} />
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default CardContainer
