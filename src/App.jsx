import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CartContent from "./components/CartContent";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContext from "./context/CartContext";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route
            exact
            path="/Categoria/:Categoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/Cart" element={<CartContent />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
