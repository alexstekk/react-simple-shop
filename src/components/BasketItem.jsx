function BasketItem(props) {
	const { mainId, displayName, regularPrice, quantity } = props;
	return (
		<li className='basket__item'>
			<p>
				{displayName} x {quantity} = {regularPrice * quantity} руб.
			</p>
			<span>
				<i className='material-icons basket__delete-item'>delete</i>
			</span>
		</li>
	);
}

export { BasketItem };
