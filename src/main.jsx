import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Error from './ErrorElement/Error';
import Home from './Home/Home';
import Biodata from './Page1/Biodata/Biodata';
import Login from './Login/Login';
import AuthProvider from './Providers.jsx/AuthProvider';
import Registration from './Login/Registration';
import About from './Page1/About&contact/About';

import Contact from './Page1/About&contact/Contact';
import PrivateRoute from './Providers.jsx/PrivateRoute';
import Dashborad from './Dashboard/Dashborad';
import Cart from './Dashboard/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/biodata',
        element: <Biodata></Biodata>,
        loader: () => fetch('http://localhost:5000/datas')
      },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },

    ]

  },

  {
    path: "dashboard",
    element: <Dashborad></Dashborad>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
    
     

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    

  </React.StrictMode>,
)
