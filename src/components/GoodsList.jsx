import { GoodsItem } from './GoodsItem';
import { NotFound } from './NotFound';
import { ShopContext } from '../context';
import { useContext } from 'react';

function GoodList() {
	const { goods } = useContext(ShopContext);
	return goods.length ? (
		<div className='goods'>
			{goods.map((good) => {
				return (
					<GoodsItem
						key={good.mainId}
						{...good}
					/>
				);
			})}
		</div>
	) : (
		<NotFound />
	);
}

export { GoodList };
