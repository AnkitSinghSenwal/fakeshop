import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import Cart from "./pages/cart";

function App() {

  return (
    <>
    <div className="bg-gray-900 min-h-screen">
      <Header/>
      <Routes>
        <Route path="/fakeshop/" element={<Home />} />
        <Route path="/fakeshop/cart" element={<Cart />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
