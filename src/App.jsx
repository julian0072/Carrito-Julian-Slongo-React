import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ComponenteNavbar from "./components/ComponenteNavbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <ComponenteNavbar />
      <ItemListContainer />
    </>
  );
}

export default App;
