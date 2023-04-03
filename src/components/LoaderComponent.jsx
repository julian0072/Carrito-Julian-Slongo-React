import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";

function LoaderComponent({ delay, component }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading ? (
    <div>
      <Spinner animation="border" role="status" className="py-5 spinner mt-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="display-5 fw-bold py-5 mb-t">Cargando</p>
    </div>
  ) : (
    component
  );
}

export default LoaderComponent;
