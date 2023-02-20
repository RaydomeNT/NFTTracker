import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages & components
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Twitter from "./pages/Twitter";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
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
