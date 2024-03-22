import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
	const { order, handleBasketShow } = useContext(ShopContext);
	const totalQuantityInCart = order.reduce((quantity, item) => {
		return quantity + item.quantity;
	}, 0);
	return (
		<div
			className='cart'
			onClick={handleBasketShow}
		>
			<i className='material-icons'>shopping_cart</i>
			{totalQuantityInCart ? <span className='cart__quantity'>{totalQuantityInCart}</span> : null}
		</div>
	);
}

export { Cart };
