import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
	const { mainId, displayName, regularPrice, quantity } = props;
	const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

	return (
		<li className='basket__item'>
			<div>
				<span className='basket__name'>{displayName}</span>
				<div className='basket__btn-group'>
					<button
						className='basket__quantity-btn'
						onClick={() => {
							decQuantity(mainId);
						}}
					>
						-
					</button>
					<span className='basket__quantity'>{quantity}</span>
					<button
						className='basket__quantity-btn'
						onClick={() => {
							incQuantity(mainId);
						}}
					>
						+
					</button>
				</div>
				<span className='basket__total'>{regularPrice * quantity} руб.</span>
			</div>
			<span>
				<i
					className='material-icons basket__delete-item'
					onClick={() => {
						removeFromBasket(mainId);
					}}
				>
					delete
				</i>
			</span>
		</li>
	);
}

export { BasketItem };
