
import Editor from '../../components/Editor';
import './newPost.css';



function NewPost() {
	
	return ( 
		<>
				<div className='container'>
					<div className='editor'>
						<Editor />
					</div>
				</div>
		</>
	);
}

export default NewPost;