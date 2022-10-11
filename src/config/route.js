import React from "react";
import {
  BrowserRouter as Router, Route, Routes, 
} from "react-router-dom";
import Login from "../screen/login";

export default function LoginRoute() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    </Router>
  )
}