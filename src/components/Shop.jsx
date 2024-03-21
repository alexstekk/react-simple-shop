import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodList } from './GoodsList';
import { Cart } from './Cart';

function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState([]);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setIsLoading(false);
			});
	}, []);

	const addToBasket = (item) => {};
	return (
		<main className='main'>
			<div className='main__container container'>
				<Cart quantity={order.length} />
				{isLoading ? (
					<Preloader />
				) : (
					<GoodList
						goods={goods}
						addToBasket={addToBasket}
					/>
				)}
			</div>
		</main>
	);
}

export { Shop };
