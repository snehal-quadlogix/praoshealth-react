
// ** React Imports
import React, { Suspense } from 'react'

// ** Layout Import
import Header from './views/pages/layout/header/Header'
import Footer from './views/pages/layout/footer/Footer'

// ** Router Import
import Router from './router/Router'

// ** Bootstrap Import
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

// ** Core styles
import './App.css'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Header />
        <Router />
      <Footer />
    </Suspense>
  )
}

export default App
