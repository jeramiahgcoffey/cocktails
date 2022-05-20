import { Box, Grid } from '@mui/material'
import CocktailCard from './CocktailCard'

const CardContainer = ({ drinks }) => {
    return (
        <Box display='flex' sx={{ alignItems: 'flex-start' }}>
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
