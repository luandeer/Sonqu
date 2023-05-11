import Home from './pages/Home'
import Header from './components/header/Header'
import Suscribete from './pages/Suscribete'
import Page404 from './pages/Page404'
import Beneficios from './pages/Beneficios'
import Footer from './components/footer/Footer'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

//usamos as para poner un alias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function App() {
  
  return (
    <Router>
      <Header/>
      <Helmet>
        <title>Sonqu Oficial</title>
        <meta name='description' content='Se parte de sonqu y gana increíbles premios cada mes.'/>
        <meta name='keywords' content='sonqu, SONQU, Sonqu, Sonquoficial, Sonquoficial, sonqu suscriptores, sonqu colaboradores, sonqu sorteos'/>
      </Helmet>
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
