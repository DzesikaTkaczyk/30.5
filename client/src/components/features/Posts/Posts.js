import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts, request } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && posts.length > 0 && <PostsList posts={posts} />}
        {pending === false && error !== null  && <Alert variant='error'>Connect error</Alert>}
        {pending === false && success === true && posts.length === 0 && <Alert variant='info'>No posts</Alert>}
      </div>
    )
  }
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;