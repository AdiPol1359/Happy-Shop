import React, { useContext, useState } from 'react';

const NavigationContext = React.createContext(null);

const NavigationProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw Error('useNavigation needs to be used inside NavigationProvider');
  }

  return context;
};

export default NavigationProvider;
