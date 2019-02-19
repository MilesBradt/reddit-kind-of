import React from 'react';
import dbPosts from '../assets/posts'
import { Button, Col, Row, Icon } from 'react-materialize';
import PostControl from './PostControl'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      viewType: 'default',
      posts: dbPosts
    };
  }



  render(){
    return(
      <PostControl
      posts= {this.state.posts}
      view= {this.state.viewType} />
    );
  }
}

export default Home;
