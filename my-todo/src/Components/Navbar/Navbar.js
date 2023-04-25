import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
    const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
    return (
  <Nav>
      <Logo href="#">Taskroo</Logo>
      <Hamburger onClick={toggleNav}>
        <span />
        <span />
        <span />
      </Hamburger>
      <ALLinks showNav={showNav}>
        <Links to="/">Home</Links>
        <Links to="/task">Task</Links>
        <Links to="/contact">Contact</Links>
      </ALLinks>
    </Nav>
  )
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #333;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ALLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ showNav }) => (showNav ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 9%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Links = styled(Link)`
  margin-left: 2rem;
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #555;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;


export default Navbar;