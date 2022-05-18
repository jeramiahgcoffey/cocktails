import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import SharedLayout from './components/SharedLayout'
import MyLists from './pages/MyLists'
import MyDrinks from './pages/MyDrinks'
import Post from './pages/Post'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
    return (
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
    )
}

export default App
