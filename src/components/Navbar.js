import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { LogoutAction } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from './HOC/routes';

function Navbar1({ history }) {
  const PathName = history.location.pathname.replace('/', '');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.token);
  const logout = () => {
    dispatch(LogoutAction());
  };
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <div className='hide'>
          {routes.map((route, index) => (
            <li className='nav-item' key={index}>
              <NavLink exact to={route.path} className='nav-link'>
                {route.name}
              </NavLink>
            </li>
          ))}
        </div>
        <li className='nav-item'>
          <span className='nav-link' onClick={logout}>
            Logout
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets"></Nav.Link> */}
        <li className='nav-item'>
          <NavLink to='/signin' className='nav-link'>
            Login
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <div>
      {/* <Navbar bg='light'>
        <Navbar.Brand href='#home text-uppercase'>
          {PathName ? PathName : 'home'}
        </Navbar.Brand>
      </Navbar> */}
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ zIndex: 1 }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
          <Link to='/' className='navbar-brand text-uppercase'>
            {PathName ? PathName : 'home'}
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(Navbar1);
