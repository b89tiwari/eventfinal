import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./pages/footer/Footer";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="register" element={ user ? <Home /> : <Register />} />
        <Route path="login" element={ user  ? <Home /> :<Login />} />
        <Route path="write" element={ user ? <Write /> : <Register/>} />
        <Route path="setting" element={ user ? <Setting /> : <Register/>} />
        <Route path="/event/:eventId" element={<Single />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
