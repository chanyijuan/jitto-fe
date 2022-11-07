import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flipbox from "./components/Flipbox/Flipbox";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="wrapper">
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
