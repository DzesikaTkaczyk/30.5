import { connect } from 'react-redux';
import { getPostsLength, loadPostsRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  postsLength: getPostsLength(state),
})

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);