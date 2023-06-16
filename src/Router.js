import {Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';

export const RoutesApp = () => {
    const token = localStorage.getItem('token');
    console.log(token)

    return (
        <BrowserRouter>
        <Routes>
            {!token ? 
            <>
             <Route path="/login" element={<Login/>}/>         
             <Route path="/register" element={<Register/>}/>  
             <Route path="*" element={<Home/>}/> 
            </>
            : 
            <>
            {/* redirect to profile */}
            <Route path="*" element={<Navigate to="/profile"/>}/> 
            <Route path="/profile"  element={<Profile/>}/>            
            </>
            }

        </Routes>

        </BrowserRouter>
    )
}