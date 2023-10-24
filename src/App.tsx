import './App.css'
import Home from "./Home"
import About from "./About"
import Team from "./Team"
import Publications from "./Publications"
import Resources from "./Resources"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  )
}

export default App
