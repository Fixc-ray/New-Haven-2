import React, { createContext, useState, useContext } from 'react';

// Create the context
const OrderContext = createContext();

// Custom hook to use the OrderContext
export const useOrder = () => {
  return useContext(OrderContext); // Ensure this is correctly returning the context
};

// OrderProvider component to wrap the app
export const OrderProvider = ({ children }) => {
  const [totalOrders, setTotalOrders] = useState(120); // Initial total orders

  // Increment total orders
  const incrementOrders = () => setTotalOrders((prevCount) => prevCount + 1);

  return (
    <OrderContext.Provider value={{ totalOrders, incrementOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
