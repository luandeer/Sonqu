import Home from './pages/Home'
import Header from './components/header/Header'
import Suscribete from './pages/Suscribete'
import Page404 from './pages/Page404'
import Beneficios from './pages/Beneficios'

//usamos as para poner un alias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <>
        <Route exact path="/*" element={<Navigate to="/" />} />
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/suscribete' element={<Suscribete/>}/>
        <Route exact path='/beneficios' element={<Beneficios/>}/>
        <Route path='*' element={<Page404/>}/>
        </>
      </Routes>
    </Router>
  )
}

export default App
