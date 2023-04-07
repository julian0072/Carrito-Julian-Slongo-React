import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (prod) => {
    const itemIndex = cart.findIndex((item) => item.id === prod.id);
    if (itemIndex === -1) {
      setCart([...cart, prod]);
      setCartItems([...cartItems, prod.id]);
      setCartCount(cartCount + 1);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === prod.id) {
          return {
            ...item,
            cantidad: prod.cantidad,
          };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    const deleteItem = cart.filter((prod) => prod.id !== id);
    setCart([...deleteItem]);
  };

  const nullCart = () => {
    setCart([]);
    setCartCount(0);
  };
  const totalCart = () => {
    return cart.reduce((total, prod) => total + prod.price * prod.cantidad, 0);
  };
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const updateCart = cart.map((prod) => {
        if (prod.id === item.id) {
          prod.cantidad += cantidad;
        }
        return prod;
      });
      setCart(updateCart);
    } else {
      setCart([...cart, { ...item, cantidad: cantidad }]);
    }
    setCartCount(cartCount + cantidad);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItem,
        totalCart,
        nullCart,
        addToCart,
        setCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
