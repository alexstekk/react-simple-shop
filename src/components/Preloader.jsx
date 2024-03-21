import preloaderSvg from './preloader.svg';

function Preloader() {
	return (
		<div className='preloader'>
			<img
				src={preloaderSvg}
				alt='preloader'
			/>
		</div>
	);
}

export { Preloader };
