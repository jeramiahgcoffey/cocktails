import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Register from './pages/Register'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Explore />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
