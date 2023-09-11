import { Cart } from 'components/Cart/Cart';
import Header from '../Header/Header';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import UnderHeader from '../underHeader/underHeader';

export const AppBar = ({ handleLogin, handleOpenCart }) => {
  return (
    <div>
      <Header />     
      <UnderHeader handleLogin={handleLogin} handleOpenCart={handleOpenCart}/>
      <HorizontalMenu />
    </div>
  );
};
