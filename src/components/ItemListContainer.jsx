import React from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting, categoria }) {
  return (
    <>
      <h1 className="py-5 fw-bold item-list-container">{greeting}</h1>
      <ItemList categoria={categoria} />
    </>
  );
}

export default ItemListContainer;
