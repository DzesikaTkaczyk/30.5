import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import cutText from './cutText';
import { Link } from "react-router-dom";

import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const PostSummary = ({ id, title, content, author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <p>Author: {author}</p>
    <HtmlBox>{cutText(content, 250)}</HtmlBox>
    <Button variant="primary">
      <Link to={`/posts/${id}`}>Read more</Link>
    </Button>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default PostSummary;