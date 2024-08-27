import './App.css'

// react-router-dom version v6
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

// react-router-dom version v6.12
import {
  createBrowserRouter,          // BrowserRouter, 
  createRoutesFromElements,    // Routes, 
  RouterProvider,              // Route, 
  Route
} from 'react-router-dom'

// layout
import RootLayout from './layout/RootLayout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
       <Route element={<RootLayout />} >  
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )


return (
  <div className='App'>
      <RouterProvider router={routes} />
  </div>
)
}

export default App
