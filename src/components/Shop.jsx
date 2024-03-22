import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';

import { Preloader } from './Preloader';
import { GoodList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
	const { setGoods, isLoading, order, isBasketShow, alertName } = useContext(ShopContext);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setGoods(data.shop);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order));
	}, [order]);

	return (
		<main className='main'>
			<div className='main__container container'>
				<Cart />
				{isLoading ? <Preloader /> : <GoodList />}
				{isBasketShow && <BasketList />}
				{alertName && <Alert />}
			</div>
		</main>
	);
}

export { Shop };
