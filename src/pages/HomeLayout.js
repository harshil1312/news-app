import * as React from 'react';
import {Outlet, Link, NavLink} from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse
} from "reactstrap";
import {useState} from "react";
import {connect} from "react-redux";

function HomeLayout(props) {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const path = [
    {
      name: 'Headlines',
      href: '/news/headlines'
    },
    {
      name: 'All',
      href: '/news/all'
    },
    {
      name: 'Bookmarked',
      href: '/news/bookmarked'
    }
  ];

  const {articles} = props;

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">News App</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              path.map(({name, href}, i) => {
                return <NavItem key={i}>
                  <NavLink className="d-flex align-items-center nav-link"
                        to={href}>{name} {name === 'Bookmarked' ?
                    <span className={'count-number'}>{articles && articles.length || 0}</span> : ''}
                  </NavLink>
                </NavItem>
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
}

const mapStateToProps = ({newsBookmark}) => {
  const {articles} = newsBookmark;
  return {articles};
};

export default (connect(
  mapStateToProps,
  {}
)(HomeLayout));
