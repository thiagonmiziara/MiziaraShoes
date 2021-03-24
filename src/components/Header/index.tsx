import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  //atualiza o valor do carrinho na home
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
           {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} 
          </span>
        </div>
        <MdShoppingBasket size={36} color="#fb7419" />
      </Cart>
    </Container>
  );
};

export default Header;
