import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
	const { alertName: name = '', closeAlert, handleBasketShow } = useContext(ShopContext);

	useEffect(() => {
		const timer = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name]);

	return (
		<div className='alert'>
			<div className='alert__body'>
				{name} добавлен в{' '}
				<span
					onClick={handleBasketShow}
					style={{ textDecoration: 'underline', cursor: 'pointer' }}
				>
					корзину
				</span>
			</div>
		</div>
	);
}

export { Alert };
