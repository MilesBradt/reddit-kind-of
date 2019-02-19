import React from 'react';
import PropTypes from 'prop-types';
import ClassicView from './ClassicView';

function PostControl (props) {

  if (props.view == 'default'){
    return (<ClassicView posts={props.posts}/>)
    } else {
      return (<ClassicView/>);
  }
};

PostControl.propTypes = {
  posts: PropTypes.array,
  view: PropTypes.string
}

export default PostControl;
