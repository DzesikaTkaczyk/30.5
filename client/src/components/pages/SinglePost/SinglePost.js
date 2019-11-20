import React from 'react';

import SinglePostContainer from '../../features/SinglePost/SinglePostContainer';

const SinglePost = props => (
	<div>
		<SinglePostContainer id={props.match.params.id} />
	</div>
);

export default SinglePost;