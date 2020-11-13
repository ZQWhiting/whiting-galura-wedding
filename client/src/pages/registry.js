import { Link } from 'react-router-dom';

function Registry() {
	return (
		<>
			<div className='line-break'>
				<a
					className='d-block h5'
					href='https://www.target.com/gift-registry/giftgiver?registryId=1fd67dd9dd994cdaa18cc375b2f21000&type=WEDDING'
					target='_blank'
					rel='noreferrer'
				>
					Target registry
				</a>
				<a
					className='d-block h5'
					href='https://www.amazon.com/wedding/registry/2Q081GXTQ5IPF'
					target='_blank'
					rel='noreferrer'
				>
					Amazon registry
				</a>
				<a
					className='d-block h5'
					href='https://paypal.me/ZacharyWhiting'
					target='_blank'
					rel='noreferrer'
				>
					Monetary Donations - PayPal
				</a>
				<Link className='d-block h5' to='./contact'>
					Monetary Donations - Zelle
				</Link>
			</div>
			<h5 className='text-footer'>
				We greatly appreciate any and all contributions.
			</h5>
		</>
	);
}

export default Registry;
