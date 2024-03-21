import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setIsBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');

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

	const totalQuantityInCart = order.reduce((quantity, item) => {
		return quantity + item.quantity;
	}, 0);

	const removeFromBasket = (id) => {
		setOrder(order.filter((item) => item.mainId !== id));
	};

	const closeAlert = () => {
		setAlertName('');
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
		setAlertName(item.displayName);
	};

	const incQuantity = (id) => {
		setOrder(
			order.map((item) => {
				if (item.mainId === id) {
					return { ...item, quantity: item.quantity + 1 };
				} else {
					return item;
				}
			})
		);
	};
	const decQuantity = (id) => {
		setOrder(
			order.reduce((arr, item) => {
				if (item.mainId === id) {
					item = { ...item, quantity: item.quantity - 1 };
				}
				if (item.quantity) {
					arr = [...arr, item];
				}
				return arr;
			}, [])
		);
	};

	return (
		<main className='main'>
			<div className='main__container container'>
				<Cart
					quantity={totalQuantityInCart}
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
				{isBasketShow && (
					<BasketList
						order={order}
						handleBasketShow={handleBasketShow}
						removeFromBasket={removeFromBasket}
						incQuantity={incQuantity}
						decQuantity={decQuantity}
					/>
				)}
				{alertName && (
					<Alert
						name={alertName}
						closeAlert={closeAlert}
						handleBasketShow={handleBasketShow}
					/>
				)}
			</div>
		</main>
	);
}

export { Shop };
