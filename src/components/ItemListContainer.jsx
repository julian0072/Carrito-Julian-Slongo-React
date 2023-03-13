import React from "react";
import CardsItem from "./CardsItem";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1 className="py-5 fw-bold item-list-container">{greeting}</h1>
      <CardsItem />
    </>
  );
}

export default ItemListContainer;
