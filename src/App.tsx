import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import TakeNotes from "./pages/TakeNotes";
import Quiz from "./pages/Quiz";
import Application from "./pages/Application";
import Lecture from "./pages/Lecture";
import HomePage from "./pages/HomePage";
import { ClipLoader, PuffLoader } from "react-spinners"; // Import ClipLoader
import { Typography } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when your app is ready.
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <PuffLoader color="aliceblue" size={400} speedMultiplier={2} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/application" element={<Application />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/notes" element={<TakeNotes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
