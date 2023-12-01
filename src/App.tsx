import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { PuffLoader } from "react-spinners"

import About from "./pages/About"
import Application from "./pages/Application"
import HomePage from "./pages/HomePage"
import Lecture from "./pages/Lecture"
import Quiz from "./pages/Quiz"
import TakeNotes from "./pages/TakeNotes"

import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <PuffLoader color="aliceblue" size={400} speedMultiplier={2} />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/application" element={<Application />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/notes" element={<TakeNotes />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Your context provider closing tag */}
        </>
      )}
    </div>
  )
}

export default App
