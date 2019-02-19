import React from 'react';
import { Row } from 'react-materialize';
import PropTypes from 'prop-types';


function ClassicView (props) {

  return (
    <React.Fragment>
      {props.posts.map((post, index) =>
        <Row>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p>{post.votes}</p>
        </Row>)}
    </React.Fragment>
  )
}


ClassicView.propTypes = {
  posts: PropTypes.array
}

export default ClassicView;
