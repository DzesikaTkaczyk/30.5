import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage, initialPage, postsPerPage } = this.props;
    loadPostsByPage(initialPage || 1, postsPerPage);
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage);
  }

  render() {
    const { posts, request, pages, pagination, presentPage } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;
    const { loadPostsPage } = this;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && posts.length > 0 && pagination === true &&
          <div>
            <PostsList posts={posts} />
            <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage} />
          </div>}
        {pending === false && success === true && posts.length > 0 && pagination === false &&
          <div><PostsList posts={posts} /></div>}
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
  loadPostByPage: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired,
};

Posts.defaultProps = {
  initialPage: 1,
  postsPerPage: 10,
  pagination: true,
};

export default Posts;