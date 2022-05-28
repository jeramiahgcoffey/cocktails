import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Search from '../components/Search'
import CardContainer from '../components/ui/CardContainer'
import { Box, Divider, Typography } from '@mui/material'

const MyDrinks = () => {
  const { getUserDrinks, drinks, isLoading } = useAppContext()
  useEffect(() => {
    getUserDrinks()
  }, [])

  return (
    <>
      <Box>
        <Typography variant='h2'>My Drinks</Typography>
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
