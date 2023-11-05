import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Cocktail from './pages/Cocktail'
import About from './pages/About'
const App = () => {

    return (
        <Router>
            <main>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/cocktail/:id' element={<Cocktail />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </main>
        </Router>
    )    
    }
    export default App