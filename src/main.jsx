import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootswatch/dist/lux/bootstrap.min.css";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Navbar from './Components/Navbar.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const NavbarWrapper = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<NavbarWrapper/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
      
    
    {/* <App /> */}
  </React.StrictMode>,
)
