import notFoundSVG from './notfound.svg';

function NotFound() {
	return (
		<div className='not-found'>
			<img
				src={notFoundSVG}
				alt='nothing found'
			/>
			<h2 className='not-found__text'>Nothing found</h2>
		</div>
	);
}

export { NotFound };
