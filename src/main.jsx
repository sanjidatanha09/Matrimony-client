import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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

import ViewData from './Dashboard/ViewData';
import DetailsBio from './Page1/DetailsBio';
import EditBio from './Dashboard/EditBioData/EditBio';
import Favourite from './Dashboard/Favourite/Favourite';
import ManageUsers from './Dashboard/Manageuser/ManageUsers';
import Premium from './Dashboard/ApprovedPremium/Premium';
import AcRequest from './Dashboard/ACRequest/AcRequest';
import CheckOut from './Page1/checkoutpage/CheckOut';
import GotMarried from './Dashboard/GotMarried/GotMarried';
import StoryView from './Dashboard/StoryView/StoryView';
import StoryView2 from './Dashboard/StoryView/StoryView2';
import MycontactRequ from './Dashboard/MyContactRequ/MycontactRequ';
import AdminHome from './Dashboard/Adminhome/AdminHome';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/biodata',
        element: <Biodata></Biodata>,
        loader: () => fetch('https://assignment12-server-alpha.vercel.app/datas')
      },
      {
        path: '/detailsBio',
        element: <DetailsBio></DetailsBio>,
        loader: () => fetch('https://assignment12-server-alpha.vercel.app/datas')
      }
      ,
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`https://assignment12-server-alpha.vercel.app/checkout/${params.id}`)
      },

      
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      }

    ]

  },

  {
    path: "dashboard",
    element: <Dashborad></Dashborad>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: 'viewbio',
        element: <ViewData></ViewData>,
        
      },
      {
        path: 'editbio',
        element: <EditBio></EditBio>,
       
      },
      {
        path: 'favbio',
        element: <Favourite></Favourite>,
        loader: () => fetch('https://assignment12-server-alpha.vercel.app/favget')

      },
      {
        path: 'mycontactrequest',
        element: <MycontactRequ></MycontactRequ>,

      },
     
      {
        path: 'married',
        element: <GotMarried></GotMarried>,

      },

      //admin routes
      {
        path: 'adminhome',
        element: <AdminHome></AdminHome>,

      },
      {
        path: 'manageuser',
        element: <ManageUsers></ManageUsers>,

      },
      {
        path: 'approvedpremium',
        element: <Premium></Premium>,

      },
      {
        path: 'approvedcontactrequest',
        element: <AcRequest></AcRequest>,

      },
      {
        path: 'story',
        element: <StoryView></StoryView>

      }, 

      {
        path: 'clientreview/:id',
        element: <StoryView2></StoryView2>,
        loader: ({ params }) => fetch(`https://assignment12-server-alpha.vercel.app/clientreview/${params.id}`)

      },
      




    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />


      </QueryClientProvider>

    </AuthProvider>




  </React.StrictMode>,
)
