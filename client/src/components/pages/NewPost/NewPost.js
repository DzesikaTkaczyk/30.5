import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostFormContainer from '../../features/PostForm/PostFormContainer';

const NewPost = () => (
	<div>
		<PageTitle>Add post</PageTitle>
		<PostFormContainer />
	</div>
);

export default NewPost;