import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=>{
  const apikey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar color="#f11946" height={4} progress={progress} />
            <Routes>
              <Route
                path="/"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="general" category="general" />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/entertainment"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="entertainment" category="entertainment" />
                }
              />
              <Route
                path="/science"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="science" category="science" />
                }
              />
              <Route
                path="/technology"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="technology" category="technology" />
                }
              />
              <Route
                path="/health"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="health" category="health" />
                }
              />
              <Route
                path="/sports"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="sports" category="sports" />
                }
              />
              <Route
                path="/general"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="general" category="general" />
                }
              />
              <Route
                path="/business"
                element={
                  <News setProgress={setProgress} apikey={apikey} key="business" category="business" />
                }
              />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
  
  export default App;