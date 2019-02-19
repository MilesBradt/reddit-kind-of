import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardTitle, Button } from 'react-materialize';
import cardImg from "../assets/images/top.png";


const cardStyle = {
  marginTop: '-20px',
  width: '350px'
}

const buttonStyle = {
  backgroundColor: '#336699',
  width: '300px',
  margin: '0 auto',
  display: 'flex',
}

const buttonText = {
  margin: '0 auto',
  display: 'flex'
}

const headerText = {
  fontSize: '1.75em'
}


function Sidebar (){

  return (
    <Col m={7} s={12}>
      <Card className='grey darken-3 grey-text text-lighten-3
' style={cardStyle} horizontal header={<CardTitle image={cardImg}></CardTitle>} actions={[<Button style={buttonStyle}><span style={buttonText}>CREATE POST</span></Button>]}>
        <p style={headerText}>r/popular</p>
        <br/>
        <p>The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.</p>
      </Card>
    </Col>
  )
}

export default Sidebar;
