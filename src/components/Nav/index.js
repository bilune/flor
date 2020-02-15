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

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div>
      <Navbar light={!isHome} dark={isHome} expand="md" className="nav py-4 px-5">
        <NavbarBrand className="nav__brand" tag={NavLink} to="/">
          Flor Herrera
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <RsNav className="ml-auto" navbar>
            <NavItem>
              <RsNavLink exact className="nav__link" tag={NavLink} to="/">
                Trabajos
              </RsNavLink>
            </NavItem>
            <NavItem>
              <RsNavLink exact className="nav__link" tag={NavLink} to="/about">
                Sobre Mí
              </RsNavLink>
            </NavItem>
            <NavItem>
              <RsNavLink exact className="nav__link" tag={NavLink} to="/contact">
                Contacto
              </RsNavLink>
            </NavItem>
          </RsNav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
