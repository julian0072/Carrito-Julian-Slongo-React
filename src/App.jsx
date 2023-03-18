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
          element={
            <ItemListContainer
              greeting={
                <h1 className="display-5 py-5 text-light">
                  {" "}
                  ¡Catalogo completo!
                </h1>
              }
            />
          }
        ></Route>

        <Route
          path="/catalogue/:categoria"
          element={
            <ItemListContainer
              greeting={
                <h1 className="display-5 py-5 text-light">
                  {" "}
                  ¡Catalogo Shooter!
                </h1>
              }
            />
          }
        />
        <Route
          path="/catalogue/:categoria"
          element={
            <ItemListContainer
              greeting={
                <h1 className="display-5 py-5 text-light"> ¡Catalogo Fifa!</h1>
              }
            />
          }
        />
        <Route
          path="/catalogue/:categoria"
          element={
            <ItemListContainer
              greeting={
                <h1 className="display-5 py-5 text-light">
                  {" "}
                  ¡Catalogo Estrategia!
                </h1>
              }
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
