import { BasketItem } from './BasketItem';
function BasketList(props) {
	const { order, handleBasketShow } = props;

	const totalSum = order.reduce((sum, el) => {
		return sum + el.regularPrice * el.quantity;
	}, 0);

	return (
		<div className='basket'>
			<div className='basket__header'>
				Корзина
				<i
					className='material-icons basket__close-icon'
					onClick={handleBasketShow}
				>
					close
				</i>
			</div>
			<div className='basket__body'>
				{order.length ? (
					<ul className='basket__list'>
						{order.map((item) => (
							<BasketItem
								key={item.mainId}
								{...item}
							/>
						))}
					</ul>
				) : (
					<p>Корзина пуста</p>
				)}
			</div>
			<div className='basket__footer'>Общая стоимость: {totalSum}</div>
		</div>
	);
}

export { BasketList };
