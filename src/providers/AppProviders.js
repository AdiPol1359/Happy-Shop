import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import NavigationProvider from 'hooks/useNavigation';
import ItemsProvider from 'hooks/useItems';
import CartProvider from 'hooks/useCart';

const AppProviders = ({ children }) => (
  <Router>
    <ThemeProvider theme={{}}>
      <NavigationProvider>
        <ItemsProvider>
          <CartProvider>
            <GlobalStyle />
            {children}
          </CartProvider>
        </ItemsProvider>
      </NavigationProvider>
    </ThemeProvider>
  </Router>
);

export default AppProviders;
