// context on väga sarnane tehnoloogiale redux
// mõlemad on globaalse muutuja jaoks

import { createContext, useState } from 'react';

// Create a Context for the app
export const CartSumContext = createContext(
	{
		cartSum: 0,
		setCartSum: (value) => { }
	}
);

// Create a provider component
export const CartSumProvider = ({ children }) => {
  // State that will be shared in the context
  const [cartSum, setCartSum] = useState(calculateSum());

  function calculateSum() {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    let sum = 0;
    cartLS.forEach(cartProduct => sum = sum + cartProduct.toode.price * cartProduct.kogus);
    return sum;
  }

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};