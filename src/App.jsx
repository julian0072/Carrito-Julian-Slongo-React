import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CartContent from "./components/CartContent";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route
          exact
          path="/catalogue"
          element={<ItemListContainer greeting={"¡Catalogo completo!"} />}
        ></Route>

        <Route exact path="/Cart" element={<CartContent />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
