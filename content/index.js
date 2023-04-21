import { createContext, useState } from "react";
const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addCart = (product) => {
    const isProduct = cart.find((item) => item.id === product.id);
    if (isProduct) {
      return setCart((prevCard) => {
        return prevCard.map((item) => {
          if (item.id === isProduct.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      });
    }
    setCart((prevCard) => {
      return [...prevCard, { ...product, quantity: 1 }];
    });
  };

  const removeCard = (product) => {
    const isProduct = cart.find((item) => item.id === product.id);
    if (isProduct) {
      console.log(isProduct);
      if (isProduct.quantity === 1) {
        return setCart(cart.filter((item) => item.id !== product.id));
      }
      if (isProduct.quantity > 1) {
        return setCart((prevCard) => {
          return prevCard.map((item) => {
            if (item.id === isProduct.id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        });
      }
    }
  };

  const getCountQuantity = (product) => {
    const isProduct = cart.find((item) => item.id === product.id);
    return isProduct ? isProduct.quantity : 0;
  };

  // const checkout = () => {
    // setCart([]);
  // };

  return (
    <CartContext.Provider
      value={{ addCart, cart, removeCard, getCountQuantity, setCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export { Provider, CartContext };
