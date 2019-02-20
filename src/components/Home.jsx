import React from 'react';
import dbPosts from '../assets/posts'
import { Button, Col, Row, Icon } from 'react-materialize';
import PostControl from './PostControl'
import Sidebar from './Sidebar'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      viewType: 'default',
      posts: dbPosts
    };
  }



  render(){

    const contentStyle = {
      position: 'fixed',
      top: '135px',

    }

    return(
      <Row style={contentStyle}>
        <Col s={3} m={6} l={9}>
          <PostControl
          posts= {this.state.posts}
          view= {this.state.viewType} />
        </Col>
        <Col s={9} m={6} l={3}>
          <Sidebar/>
        </Col>
      </Row>
    );
  }
}

export default Home;
