// import React, { useState, useEffect } from "react";
// import ItemList from "./ItemList";
// import Data from "../data/data.json";
// import { useParams } from "react-router-dom";

// function ItemListContainer({ greeting }) {
//   const { categoria } = useParams();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const filteredData = Data.filter(
//       (producto) => categoria === undefined || producto.categoria === categoria
//     );
//     setData(filteredData);
//   }, [categoria]);

//   return (
//     <div>
//       <h1 className="py-5 text-light">{greeting}</h1>
//       <ItemList data={data} categoria={categoria} />
//     </div>
//   );
// }

// export default ItemListContainer;

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
    // devuelve el estado al componente original después de que se haya desmontado el componente `ItemDetail`
    return () => setData([]);
  }, [categoria]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList data={data} categoria={categoria} />
    </div>
  );
}

export default ItemListContainer;
