import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
	const {
		mainId,
		displayName,
		displayDescription,
		displayAssets: [{ full_background }],
		price: { regularPrice },
	} = props;

	const { addToBasket } = useContext(ShopContext);

	return (
		<div className='card'>
			<div className='card__img'>
				<img
					src={full_background ? full_background : 'https://placehold.co/400x400?text=No+image'}
					alt={displayName}
				/>
			</div>
			<div className='card__info'>
				<h2 className='card__title'>{displayName}</h2>
				<p className='card__description'>{displayDescription}</p>
				<div className='card__action'>
					<button
						className='card__button btn'
						onClick={() => {
							addToBasket({ mainId, displayName, regularPrice });
						}}
					>
						Купить
					</button>
					<p className='card__price'>{regularPrice} руб.</p>
				</div>
			</div>
		</div>
	);
}

export { GoodsItem };
