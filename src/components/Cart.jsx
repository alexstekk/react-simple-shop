function Cart(props) {
	const { quantity, handleBasketShow } = props;
	return (
		<div
			className='cart'
			onClick={handleBasketShow}
		>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart__quantity'>{quantity}</span> : null}
		</div>
	);
}

export { Cart };
