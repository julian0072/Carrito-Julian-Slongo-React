import { createContext, useState } from "react";

export const CounterContext = createContext();

const StateComponent = ({ children }) => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert("No puede tener menos que 0");
    }
  };
  const reset = () => {
    setContador(0);
  };

  return (
    <CounterContext.Provider value={{ contador, sumar, restar, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateComponent;
