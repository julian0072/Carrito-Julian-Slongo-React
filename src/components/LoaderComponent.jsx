import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";

function LoaderComponent() {
  const [loading, setLoading] = useState(true);
  const [elementos, setElementos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setElementos(["Elemento1", "Elemento2", "Elemento3"]);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoaderComponent;
