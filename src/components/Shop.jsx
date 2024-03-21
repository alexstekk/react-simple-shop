import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setIsBasketShow] = useState(false);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop.slice(0, 5));
				setIsLoading(false);
			});
	}, []);

	const handleBasketShow = () => {
		setIsBasketShow(!isBasketShow);
	};

	const addToBasket = (item) => {
		const existInOrderItemIndex = order.findIndex((orderItem) => item.mainId === orderItem.mainId);
		if (existInOrderItemIndex < 0) {
			setOrder([
				...order,
				{
					...item,
					quantity: 1,
				},
			]);
		} else {
			const updatedOrder = order.map((orderItem, index) => {
				if (existInOrderItemIndex === index) {
					return { ...orderItem, quantity: orderItem.quantity + 1 };
				} else {
					return orderItem;
				}
			});
			setOrder(updatedOrder);
		}
	};
	return (
		<main className='main'>
			<div className='main__container container'>
				<Cart
					quantity={order.length}
					handleBasketShow={handleBasketShow}
				/>
				{isLoading ? (
					<Preloader />
				) : (
					<GoodList
						goods={goods}
						addToBasket={addToBasket}
					/>
				)}
				{isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}/>}
			</div>
		</main>
	);
}

export { Shop };
