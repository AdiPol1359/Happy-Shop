import React, { useContext, useEffect, useReducer } from 'react';
import { useItems } from 'hooks/useItems';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CartContext = React.createContext(null);
const ToastSwal = withReactContent(Swal);

const toast = ToastSwal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  animation: false,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const setCookie = (id, quantity, remove = false) => {
  const date = new Date();

  date.setFullYear(remove ? 1990 : date.getFullYear() + 1);
  document.cookie = `${id}=${quantity};expires=${date.toString()}`;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data];
    case 'REMOVE':
      return state.filter((s) => s.id !== action.id);
    case 'UPDATE_QUANTITY':
      const item = state.find((i) => i.id === action.id);
      const index = state.indexOf(item);

      item.quantity = action.quantity;
      state[index] = item;

      return [...state];
    default:
      throw Error('Action not found!');
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const { items } = useItems();

  useEffect(() => {
    const decodedCookies = decodeURIComponent(document.cookie).replaceAll(
      '; ',
      ';'
    );
    const cookiesData = decodedCookies.split(';');

    cookiesData.forEach((cookie) => {
      const data = cookie.split('=');
      const item = items.find((i) => i.id === data[0]);

      if (item) {
        item.quantity = parseInt(data[1]);
        dispatch({ type: 'ADD', data: item });
      }
    });
  }, [items]);

  const addItemToCart = (item, quantity) => {
    const data = { ...item };

    data.quantity = quantity;

    dispatch({ type: 'ADD', data });
    setCookie(data.id, quantity);

    toast.fire({
      title: 'Dodano przedmiot do koszyka!',
      animation: true,
    });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
    setCookie(id, quantity);
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE', id });
    setCookie(id, '', true);
  };

  const isInCart = (id) => state.find((i) => i.id === id) != null;

  const getTotalPrice = () => {
    let result = 0;

    state.forEach(({ price, quantity }) => {
      result += price * quantity;
    });

    return result;
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        isInCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error('useCart needs to be used inside CartProvider');
  }

  return context;
};

export default CartProvider;
