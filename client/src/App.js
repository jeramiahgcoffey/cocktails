import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAppContext } from './context/appContext'
import { ThemeProvider } from '@emotion/react'
import Explore from './pages/Explore'
import SharedLayout from './components/layout/SharedLayout'
import MyLists from './pages/MyLists'
import MyDrinks from './pages/MyDrinks'
import Post from './pages/Post'
import ProtectedRoute from './components/ProtectedRoute'
import { createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'

function App() {
  const { darkMode } = useAppContext()

  const modeTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={modeTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Explore />} />
              <Route
                path='user/lists'
                element={
                  <ProtectedRoute>
                    <MyLists />
                  </ProtectedRoute>
                }
              />
              <Route
                path='user/drinks'
                element={
                  <ProtectedRoute>
                    <MyDrinks />
                  </ProtectedRoute>
                }
              />
              <Route
                path='user/post'
                element={
                  <ProtectedRoute>
                    <Post />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
