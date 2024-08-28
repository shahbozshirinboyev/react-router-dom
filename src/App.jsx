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
import ArticlesDetasil from './pages/articles/ArticlesDetasil'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Form from './pages/help/Form'
import ContactLayout from './layout/ContactLayout'
import PageNotFound from './pages/PageNotFound'
import ArticlesLayout from './layout/ArticlesLayout'
import Articles from './pages/articles/Articles'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='contact' element={<ContactLayout />}>
          <Route path='form' element={<Form />} />
          <Route path='faq' element={<Faq />} />
        </Route>

        <Route path='articles' element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
          <Route path=':id' element={<ArticlesDetasil />} />
        </Route>

        // PageNotFound
        <Route path='*' element={<PageNotFound />} />

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
