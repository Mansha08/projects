import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen overflow-hidden h-screen bg-slate-950 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn = {isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
