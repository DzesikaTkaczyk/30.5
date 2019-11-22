import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostForm from '../../features/PostForm/PostForm';

const NewPost = () => (
	<div>
		<PageTitle>Add post</PageTitle>
		<PostForm />
	</div>
);

export default NewPost;