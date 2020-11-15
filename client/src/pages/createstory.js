import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';
import Loginsuggestion from '../components/loginsuggestion';
import Auth from '../utils/auth';
import { ADD_RELATIONSHIP, CREATE_STORY } from '../utils/mutations';

function CreateStory() {
	const [titleContent, setTitleContent] = useState('');
	const [storyContent, setStoryContent] = useState('');
	const [relationshipContent, setRelationshipContent] = useState('');
	const [error1, setError1] = useState('');
	const [error2, setError2] = useState('');

	let [createStory] = useMutation(CREATE_STORY, {
		variables: { title: titleContent, body: storyContent },
	});
	let [addRelationship] = useMutation(ADD_RELATIONSHIP, {
		variables: { relationship: relationshipContent },
	});

	const loggedIn = Auth.loggedIn();

	const submitStory = async (event) => {
		event.preventDefault();
		if (titleContent && storyContent) {
			try {
				await createStory();
				setTitleContent('');
				setStoryContent('');
				setError1('');
			} catch (err) {
				console.log(err);
				setError1('Error: Missing field.');
			}
		} else {
			setError1('Error: Missing field.');
		}
	};

	const submitRelationship = async (event) => {
		event.preventDefault();
		if (relationshipContent) {
			try {
				await addRelationship();
				setRelationshipContent('');
				setError2('');
			} catch (err) {
				console.log(err);
				setError2('Error: Missing field.');
			}
		} else {
			setError2('Error: Missing field.');
		}
	};

	return (
		<div className='w-70'>
			<Loginsuggestion />
			<div>
				<h3>Share a Story</h3>
				{loggedIn && (
					<>
						<form>
							<div className='my-2 form-group mb-2 row'>
								<input
									id='title'
									name='title'
									className='form-control col mx-3 no-resize'
									rows='8'
									placeholder='Title'
									value={titleContent}
									onChange={(e) =>
										setTitleContent(e.target.value)
									}
								/>
							</div>
							<div className='my-2 form-group mb-2 row'>
								<textarea
									id='body'
									name='body'
									className='form-control col mx-3 no-resize'
									rows='8'
									placeholder='Your Story'
									value={storyContent}
									onChange={(e) =>
										setStoryContent(e.target.value)
									}
								/>
							</div>
							{error1 && (
								<div
									style={{
										color: 'red',
										paddingBottom: 5 + 'px',
									}}
								>
									{error1}
								</div>
							)}
							<button
								type='submit'
								className='btn button mb-2 submit-btn'
								onClick={submitStory}
							>
								Submit
							</button>
						</form>
					</>
				)}
			</div>
			{/* <div>
				<h3>Add Your Photo</h3>
				{loggedIn && (
					<form>
						<div className='my-2 form-group mb-2 row'>
							<input
								id='photo'
								type='file'
								name='photo'
								className='form-control col mx-3'
								accept='.png, .jpg, .jpeg'
								capture='user'
								// placeholder="Father, Mother, Cousin, Ashley's Friend, Whiting Family Friend, etc."
								// value={photoContent}
								// onChange={(e) =>
								// 	setRelationshipContent(e.target.value)
								// }
							/>
						</div>
						<button
							type='submit'
							className='btn button mb-2 submit-btn'
							onClick={submitRelationship}
						>
							Submit
						</button>
					</form>
				)}
			</div> */}
			<div>
				<h3>Add Relationship Tag</h3>
				{loggedIn && (
					<>
						<form>
							<div className='my-2 form-group mb-2 row'>
								<input
									id='relationship'
									type='text'
									name='relationship'
									className='form-control col mx-3'
									placeholder='Tag'
									value={relationshipContent}
									onChange={(e) =>
										setRelationshipContent(e.target.value)
									}
								/>
							</div>
							<p style={{ padding: '0 10px' }}>
								Father, Mother, Cousin, Ashley's Friend, Whiting
								Family Friend, etc.
							</p>
							{error2 && (
								<div
									style={{
										color: 'red',
										paddingBottom: 5 + 'px',
									}}
								>
									{error2}
								</div>
							)}
							<button
								type='submit'
								className='btn button mb-2 submit-btn'
								onClick={submitRelationship}
							>
								Submit
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export default CreateStory;
