import { Button, Card, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'

const CocktailCard = () => {
    return (
        <Card sx={{ minWidth: '200px' }} align='left'>
            <CardMedia
                component='img'
                image='https://www.seriouseats.com/thmb/PIVqgfUtdn74p6KurPXlrNwlxKs=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg'
                alt='cocktail'
                sx={{ maxWidth: '100%', height: 250 }}
            ></CardMedia>
            <div className='card__info'>
                <Typography variant='h5'>Margarita</Typography>
                <Typography variant='subtitle1'>Tequila</Typography>
                <hr />
                <Typography variant='body2' color='text.secondary'>
                    Tequila, Cointreau, Lime, Agave
                </Typography>
                <div className='card__chips'>
                    <Chip
                        size='small'
                        style={{ marginRight: '10px', marginBottom: '5px' }}
                        label='Refreshing'
                        variant='outlined'
                    />
                    <Chip
                        size='small'
                        style={{ marginRight: '10px', marginBottom: '5px' }}
                        label='Strong'
                        variant='outlined'
                    />
                </div>

                <Button size='small'>Read More</Button>
            </div>
        </Card>
    )
}

export default CocktailCard
