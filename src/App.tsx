import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPanel from "./components/TabPanel/LoginPanel/LoginPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUser] = useState('');

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/login' element={<LoginPanel setIsAuth={setIsAuth} setUser={setUser}/>} />
        <Route path='/dashboard' element={<ProtectedRoute
              path="/dashboard"
              isAuth={isAuth}
              element={<LandingPage username={username}/>}
            />} />
      </Routes>
      
      {/* <Routes>
        <Route path="/" element={<Flipbox setIsAuth={setIsAuth} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              path="/dashboard"
              isAuth={isAuth}
              element={<LandingPage />}
            />
          }
        />
      </Routes> */}
    </div>
  );
}

export default App;
