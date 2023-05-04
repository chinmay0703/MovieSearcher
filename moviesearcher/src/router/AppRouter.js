import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Home/Movies";
// import Services from "../pages/Services/Services";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home></Home>} /> */}
        <Route exact path="/" element={<Movies></Movies>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
