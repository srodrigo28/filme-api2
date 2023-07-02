import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home'
import Filme from './pages/Filme'

function RouteApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp