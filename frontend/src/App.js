import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Twitter from "./pages/Twitter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/twitter" element={<Twitter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
