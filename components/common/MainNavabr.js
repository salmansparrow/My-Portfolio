import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { useState } from "react";
import Hamburger from "./Hamburger";

function MainNavbar(args) {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);
  return (
    <>
      <div>
        <Navbar className="navbar" expand="lg" {...args}>
          <NavbarToggler onClick={toggle} className="ms-auto NavbarToggler">
            <Hamburger />
            {/* Use Hamburger component directly here */}
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="navbar-nav mx-auto " navbar>
              <NavItem>
                <NavLink href="/" className="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skils">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#project">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default MainNavbar;
