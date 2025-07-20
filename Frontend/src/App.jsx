import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './home/Home.jsx';
import Courses from "./courses/Courses";
import Contacts from "./contacts/Contacts";
import {} from 'react-router-dom';
import Signup from './components/Signup.jsx';
import {Toaster} from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contacts/>}/>
   </Routes>
     <Toaster/>
    </div>
    </>
  )
}
