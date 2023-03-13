import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Productos from "./data.json";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  //Prueba contador
  const [contador, setContador] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos a mi carrito!"} />

      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
