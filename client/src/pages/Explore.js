import { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import CardContainer from '../components/ui/CardContainer'
import Search from '../components/Search'
import { Box, Divider, Typography } from '@mui/material'

const Explore = () => {
  const { getAllDrinks, drinks } = useAppContext()
  useEffect(() => {
    getAllDrinks()
  }, [])

  return (
    <>
      <Box>
        <Typography variant='h2'>Explore</Typography>
        <Divider />
        <Search />
        <Divider sx={{ marginBottom: 2 }} />
      </Box>
      {drinks.length ? (
        <CardContainer drinks={drinks} />
      ) : (
        <Box sx={{ height: '100vh' }}></Box>
      )}
    </>
  )
}

export default Explore
