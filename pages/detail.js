import React from 'react';
import axios from 'axios';

import withAnalytics from '../src/hocs/withAnalytics'

const Detail = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
  </div>
)

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.postId}`);

  return { post:response.data };
};

export default withAnalytics()(Detail);