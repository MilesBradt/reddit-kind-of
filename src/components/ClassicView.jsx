import React from 'react';
import { Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';


function ClassicView (props) {

  const divStyle = {
    border: '1px solid grey',
    backgroundColor: '#535353',
    color: 'white',
    padding: '15px',
    marginTop: '-20px',
    height: '150px'
  }

  const titleStyle = {
    fontSize: '1em',
    fontWeight: 'bold'
  }

  const bodyStyle = {
    fontSize: '0.75em;'
  }

  const votesStyle = {
    fontSize: '1em'
  }

  return (
    <div>
      {props.posts.map((post, index) =>
        <Row style={divStyle}>
          <Col l={1}>
            <p style={votesStyle}>{post.votes}</p>
          </Col>
          <Col l={11}>
            <p style={titleStyle}>{post.title}</p>
            <p style={bodyStyle}>{post.body}</p>
          </Col>
        </Row>)}
    </div>
  )
}


ClassicView.propTypes = {
  posts: PropTypes.array
}

export default ClassicView;
