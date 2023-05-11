import Home from './pages/Home'
import Header from './components/header/Header'
import Suscribete from './pages/Suscribete'
import Page404 from './pages/Page404'
import Beneficios from './pages/Beneficios'
import Footer from './components/footer/Footer'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

//usamos as para poner un alias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Header/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path='/suscribete' element={<Suscribete/>}/>
        <Route path='/beneficios' element={<Beneficios/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
