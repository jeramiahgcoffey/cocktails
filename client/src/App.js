import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import SharedLayout from './components/SharedLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Explore />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
