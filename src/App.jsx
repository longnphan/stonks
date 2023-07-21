import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/about";
import Home from "./pages/home";
import MyStock from './pages/MyStock'
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mystock" element={<MyStock />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
