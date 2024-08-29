import "./App.css";

// react-router-dom version v6
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

// react-router-dom version v6.12
import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
import ArticlesDetasil from "./pages/articles/ArticlesDetasil";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import ContactLayout from "./layout/ContactLayout";
import PageNotFound from "./pages/PageNotFound";
import ArticlesLayout from "./layout/ArticlesLayout";
import Articles from "./pages/articles/Articles";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        errorElement: <PageNotFound />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: 'articles',
            element: <ArticlesLayout />,
            children: [
              {
                index: true,
                element: <Articles />
              }, 
              {
                path: ':id',
                element: <ArticlesDetasil />
              }
            ]
          },
          {
            path: 'contact',
            element: <ContactLayout />,
            children: [
              {
                path: 'faq',
                element: <Faq />
              }, 
              {
                path: 'form',
                element: <Form />
              }
            ]
          }
        ]
      }
    ]
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
