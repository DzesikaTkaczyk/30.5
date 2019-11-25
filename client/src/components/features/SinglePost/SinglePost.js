import React from 'react';
import { PropTypes } from 'prop-types';
import { FacebookProvider, Comments, Share } from 'react-facebook';
import { withRouter } from 'react-router-dom';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import PageTitle from '../../common/PageTitle/PageTitle';
import { BASE_URL } from '../../../config';


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
    const { location } = this.props;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && post !== null && (
          <article>
            <PageTitle>{post.title}</PageTitle>
            <FacebookProvider appId="3032843966729922">
              <Share href={`${BASE_URL}/${location.pathname}`}>
                {({ handleClick, loading }) => (
                <button type="button" disabled={loading} onClick={handleClick}>Share</button>)}
              </Share>
            </FacebookProvider>
            <p>Author: {post.author} </p>
            <HtmlBox>{post.content}</HtmlBox>
            <FacebookProvider appId="3032843966729922">
              <Comments href={`${BASE_URL}/${location.pathname}`} />
            </FacebookProvider>
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

export default withRouter(props => <SinglePost {...props}/>);