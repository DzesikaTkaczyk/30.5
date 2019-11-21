import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import PageTitle from '../../common/PageTitle/PageTitle';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadPost, id } = this.props;
    loadPost(id);
  }

  render() {
    const { post, request } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && post !== null && (
          <article>
            <PageTitle>{post.title}</PageTitle>
            <p>Author: {post.author}</p>
            <HtmlBox>{post.content}</HtmlBox>
          </article>)
        }
        {pending === false && error !== null  && <Alert variant='error'>{error}</Alert>}
        {pending === false && success === true && post === null && <Alert variant='info'>No post</Alert>}
      </div>
    )
  }
};

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPost: PropTypes.func.isRequired
};

export default SinglePost;