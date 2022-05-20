import { Button, Card, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'

const CocktailCard = ({ drink }) => {
    return (
        <Card sx={{ minWidth: '200px' }} align='left' elevation={12}>
            <CardMedia
                component='img'
                image={
                    drink.imageURL ||
                    'https://i.etsystatic.com/23297885/r/il/b618b4/3760271726/il_794xN.3760271726_8hdj.jpg'
                }
                alt='cocktail'
                sx={{ maxWidth: '100%', height: 250 }}
            ></CardMedia>
            <div className='card__info'>
                <Typography variant='h5'>{drink.name}</Typography>
                <Typography variant='subtitle1'>
                    {drink.ingredients[0]}
                </Typography>
                <hr />
                <Typography variant='body2' color='text.secondary'>
                    {drink.ingredients.map((ingredient, index) => {
                        if (index < drink.ingredients.length - 1) {
                            return `${ingredient}, `
                        } else {
                            return ingredient
                        }
                    })}
                </Typography>
                <div className='card__chips'>
                    {drink.tags.map((tag) => (
                        <Chip
                            size='small'
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            label={tag}
                            variant='outlined'
                        />
                    ))}
                </div>

                <Button size='small'>Read More</Button>
            </div>
        </Card>
    )
}

export default CocktailCard
