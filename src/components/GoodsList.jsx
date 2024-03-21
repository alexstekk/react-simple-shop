import { GoodsItem } from './GoodsItem';
import { NotFound } from './NotFound';

function GoodList(props) {
	const { goods, addToBasket } = props;
	return goods.length ? (
		<div className='goods'>
			{goods.map((good) => {
				return (
					<GoodsItem
						key={good.mainId}
						addToBasket={addToBasket}
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
