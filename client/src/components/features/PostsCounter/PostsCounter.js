import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
  }

  render() {
  	const { postsLength } = this.props;

  	if (postsLength === 0) {
  		return( <div>no posts</div> )
  	} else {
		  return( <div>Posts amount: {postsLength}</div> )
    }
  }
};

PostsCounter.propTypes = {
  posts: PropTypes.arrayOf(),
};

export default PostsCounter;