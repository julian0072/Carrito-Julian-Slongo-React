import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1 className="py-5 fw-bold item-list-container">{greeting}</h1>
    </>
  );
}

export default ItemListContainer;
