import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ItemsContext = React.createContext(null);

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItemById = (id) => items.find((i) => i.id === id);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/items.json');

      setItems(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        isLoading,
        getItemById,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw Error('useItems needs to be used inside ItemsProvider');
  }

  return context;
};

export default ItemsProvider;
