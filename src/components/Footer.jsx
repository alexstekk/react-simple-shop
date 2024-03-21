function Footer() {
	return (
		<footer className='footer'>
			<div className='container footer__container'>
				<div className='footer__copyright'> &#169; {new Date().getFullYear()}</div>
			</div>
		</footer>
	);
}

export { Footer };
