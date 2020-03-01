import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as RsNav,
  NavItem,
  NavLink as RsNavLink
} from 'reactstrap';
import logo from '../../assets/vectors/logo-black.svg';

const Nav = ({ routes = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div>
      <Navbar
        light={!isHome}
        dark={isHome}
        expand="md"
        className="nav py-4 px-5"
      >
        <NavbarBrand className="nav__brand" tag={NavLink} to="/">
          {!isHome && <img height="40" src={logo} alt="Logo Flor Herrera" />}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <RsNav className="ml-auto" navbar>
            {routes.map(route =>
              route.hide ? null : (
                <NavItem key={route.path}>
                  <RsNavLink
                    exact
                    className="nav__link"
                    tag={NavLink}
                    to={route.path}
                  >
                    {route.name}
                  </RsNavLink>
                </NavItem>
              )
            )}
          </RsNav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
