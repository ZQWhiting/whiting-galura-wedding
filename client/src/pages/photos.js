import { useQuery } from '@apollo/react-hooks';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { QUERY_PHOTOS } from '../utils/queries';

function Photos() {
	const { data, error, loading } = useQuery(QUERY_PHOTOS);

	if (loading) return <div>loading...</div>;
	if (error) return <div>Error: {error}</div>;

	const photos = data?.photos;

	return (
		<div>
			<h2>Ashley</h2>
			<div className='name-padding'>
				<div className='slide-container w-70'>
					<Slide>
						{photos.ashley.map((image, index) => (
							<div className='each-slide' key={'a-' + index}>
								<div className='slide-photo-container'>
									<img
										className='slide-photo'
										src={image}
										alt='Ashley'
									/>
								</div>
							</div>
						))}
					</Slide>
				</div>
			</div>
			<h2>Zachary</h2>
			<div className='name-padding'>
				<div className='slide-container w-70'>
					<Slide>
						{photos.zachary.map((image, index) => (
							<div className='each-slide' key={'z-' + index}>
								<div className='slide-photo-container'>
									<img
										className='slide-photo'
										src={image}
										alt='Zachary'
									/>
								</div>
							</div>
						))}
					</Slide>
				</div>
			</div>
			{/* <h2>Couple</h2>
			<div>
				<div className='slide-container w-70'>
					<Slide>
						{photos.couple.map((image, index) => (
							<div className='each-slide' key={'az-' + index}>
								<div className='slide-photo-container'>
									<img
										className='slide-photo'
										src={image}
										alt='Ashley and Zachary'
									/>
								</div>
							</div>
						))}
					</Slide>
				</div>
			</div> */}
		</div>
	);
}

export default Photos;
