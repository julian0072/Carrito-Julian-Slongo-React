import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data/data.json";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { categoria } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredData = Data.filter(
      (producto) => categoria === undefined || producto.categoria === categoria
    );
    setData(filteredData);
  }, [categoria]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList data={data} categoria={categoria} />
    </div>
  );
}

export default ItemListContainer;
