import Zachary from '../assets/images/Zachary.jpg';
import Ashley from '../assets/images/Ashley.jpg';

function Welcome() {
	return (
		<div>
			<div className='welcome-image d-flex pb-3 flex-wrap'>
				<img src={Ashley} className='mx-auto' alt='Ashley, the bride' />
				<img
					src={Zachary}
					className='mx-auto'
					alt='Zachary, the groom'
				/>
			</div>
			<div className='article'>
				<h2 className='align-center mb-2'>Welcome</h2>
				<h4 className='align-center mb-4'>
					Thank you for joining us for this most special occasion.
				</h4>
				<p>
					We created this website as an opportunity to connect with
					our loved ones. We’re so sad that we couldn’t reach you in
					person, but we wanted you to know that your support means a
					lot to us. Each of you are an important part of our lives,
					and as we make this step together, we hope to step closer to
					each of you.
				</p>
				<p>
					Although it might not compare to an in-person reception in
					some ways, we hope this website will serve as a virtual
					reception experience. We hope that you’ll enjoy learning
					more about us and our journey together through the “Our
					Story” page, and maybe share your own stories or connection
					to us in the “Your Stories” page. We have also created a
					virtual Guest Book, and have included links to our
					registries in case you’d like to support us that way.
				</p>
				<p>
					What we are most joyful to share with you, however, are our
					testimonies of our sacred and eternal union and our ring
					ceremony. The ceremony will be broadcasted at 6:15 pm
					following our sealing, during which we hope to convey the
					love we have for each other to you.
				</p>
				<p>
					We appreciate all your love and support, and for all the
					miracles that have helped us get this far. We look up to you
					as our examples, our friends, and our family.
				</p>
				<h5 className='font-eng-i align-center'>With Love,</h5>
				<h5 className='font-eng-i align-center'>Zachary & Ashley</h5>
			</div>
		</div>
	);
}

export default Welcome;
