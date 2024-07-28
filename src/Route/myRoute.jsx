import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../pages/Profile";
import About from '../pages/About'
import Contact from '../pages/Contact'
import Upload from "../components/Upload";

export const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:`/profile/:uid`,
                element:<Profile/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/upload',
                element:<Upload/>
            }
        ]
    }
]);
