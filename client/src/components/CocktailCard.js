import { Button, Card, CardMedia, Chip, Typography } from '@mui/material'

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
        sx={{ objectFit: 'cover', height: 250 }}
      ></CardMedia>
      <div className='card__info'>
        <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
          {drink.name}
        </Typography>
        <Typography variant='subtitle1' sx={{ textTransform: 'capitalize' }}>
          {drink.ingredients[0]}
        </Typography>
        <hr />
        <Typography
          variant='body2'
          color='text.secondary'
          noWrap
          sx={{ textTransform: 'capitalize' }}
        >
          {drink.ingredients.map((ingredient, index) => {
            if (index < drink.ingredients.length - 1) {
              return `${ingredient}, `
            } else {
              return ingredient
            }
          })}
        </Typography>
        <div className='card__chips' style={{ overflow: 'hidden' }}>
          {drink.tags.map((tag, index) => (
            <Chip
              key={index}
              size='small'
              style={{ marginRight: '10px', marginBottom: '5px' }}
              label={tag}
              variant='outlined'
              sx={{ textTransform: 'capitalize' }}
            />
          ))}
        </div>

        <Button size='small'>Read More</Button>
      </div>
    </Card>
  )
}

export default CocktailCard
