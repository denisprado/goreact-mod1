import React from 'react';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="posts__post">
    <PostHeader avatar={props.avatar} name={props.name} />
    <p className="posts__post__content">{props.content}</p>
  </div>
);

export default Post;
