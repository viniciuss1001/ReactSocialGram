import './App.css'

import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'

//pages
import { HomeComponent } from './pages/home/Home'
import { LoginComponent } from './pages/auth/Login'
import { RegisterComponent } from './pages/auth/Register'

//components
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="containerApp">
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/register' element={<RegisterComponent />} />
          </Routes></div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
