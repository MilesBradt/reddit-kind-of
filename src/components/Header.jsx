import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Navbar, NavItem, Dropdown, Button, Col, Row, Input, Icon } from 'react-materialize';


function Header(){

  const linkStyle = {
    float: 'right'
  };

  const signUpStyle = {
    backgroundColor: '#336699',
    borderRadius: '8%'
  }

  const logInStyle = {
    border: '3px solid #336699',
    borderRadius: '8%'
  }

  const popularStyle = {
    color: '#FFF',
    width: '250px'
  }

  // const popularIcon = {
  //   height: '1em',
  //   fontSize: '0.5em',
  //   color: 'blue'
  // }

  const buttonText = {
    textAlign: 'center'
  }

  const buttonTextLogIn = {
    textAlign: 'center',
    position: 'relative',
    top: '-2px'
  }

  const navStyle = {
    backgroundColor: '#535353',
    paddingLeft: '15px'
  }

  const navStyle2 = {
    backgroundColor: '#535353',
    paddingLeft: '15px',
    height: '35px',
    borderTop: '0.05em solid #F9F9F9'
  }

  const viewStyle = {
    position: 'relative',
    top: '-1px',
    fontSize: '1em',
    display: 'inline',
    color: 'white'
  }

  const iconStyle = {
    fontSize: '1em',
    top: '6px',
    position: 'relative',
    paddingLeft: '5px',
    color: 'white'
  }


  const middleIconStyle = {
    fontSize: '1em',
    top: '5px',
    position: 'relative',
    paddingLeft: '5px',
    color: 'white'
  }



  return (
    <React.Fragment>
    <Navbar brand='Reddit' style={navStyle}>
      <Row>
        <Col l={3} className='offset-l1'>
          <Dropdown trigger={
              <span><Button className='transparent' style={popularStyle}>Popular</Button></span>
            }>
            <NavItem>one</NavItem>
            <NavItem>two</NavItem>
            <NavItem divider />
            <NavItem>three</NavItem>
          </Dropdown>
        </Col>
        <Col l={4}>
           <Input s={6} label="Search" validate><Icon>search</Icon></Input>
        </Col>
        <Col l={4}>
          <NavItem style={linkStyle} onClick={() => console.log('test click')}><Icon>trending_up</Icon></NavItem>
          <NavItem style={linkStyle} href='components.html'><Icon>bar_chart</Icon></NavItem>
          <NavItem style={linkStyle}>
          <Button style={signUpStyle} waves='light'><span style={buttonText}>SIGN UP</span></Button>
          </NavItem>
          <NavItem style={linkStyle} >
            <Button style={logInStyle} waves='light' className='transparent'><span style={buttonTextLogIn}>LOG IN</span></Button>
          </NavItem>
        </Col>
      </Row>
    </Navbar>

    <div style={navStyle2}>
      <Row>
        <Col l={6}>
          <p style = {viewStyle}>VIEW</p>
          <span style={iconStyle}><Icon>view_stream</Icon></span>
          <span style={middleIconStyle}><Icon style={iconStyle}>calendar_view_day</Icon></span>
          <span style={iconStyle}><Icon style={iconStyle}>view_headline</Icon></span>
        </Col>
        <Col l={3}>

        </Col>
      </Row>
    </div>
  </React.Fragment>
  );
}

export default Header;
