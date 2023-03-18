import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CartContent from "./components/CartContent";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";

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
        <Route
          path="/catalogue/shooter"
          element={
            <ItemListContainer
              greeting={"¡Catálogo de Shooters!"}
              categoria={"Shooter"}
            />
          }
        />
        <Route
          path="/catalogue/fifa"
          element={
            <ItemListContainer
              greeting={"¡Catálogo de Fifa!"}
              categoria={"Fifa"}
            />
          }
        />
        <Route
          path="/catalogue/estrategia"
          element={
            <ItemListContainer
              greeting={"¡Catálogo de Estrategia!"}
              categoria={"Estrategia"}
            />
          }
        />

        <Route path="/catalogue/:id" element={<ItemDetailContainer />} />

        <Route exact path="/Cart" element={<CartContent />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
