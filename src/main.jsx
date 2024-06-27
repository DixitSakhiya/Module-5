import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Navbar from "../src/componets/Navbar.jsx"

// style import user pannel
import '../src/assets/css/main.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/bootstrap.css'
import '../src/assets/css/icon-fonts.css'
import '../src/assets/css/animate.css'

// user import
import Layout from './Layout'
import Product from './componets/Product'
import Aboutus from './componets/Aboutus'
import Contact from './componets/Contact'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/product' element={<Product />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/contact' element={<Contact />} />

     
    </Routes>
  </Router>
</React.StrictMode>,
)
