import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/services" element={<Services /> } />
      <Route path="/pricing" element={<Pricing /> } />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
