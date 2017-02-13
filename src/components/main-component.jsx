import React from 'react';
import { Link, activeStyle } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '.././index.css';

class Main extends React.Component {
    render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><h1>Home</h1></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/team">Team</NavItem>
            <NavItem eventKey={2} href="/projects">Projects</NavItem>
			<NavItem eventKey={2} href="/contact">Contacts</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Main;

