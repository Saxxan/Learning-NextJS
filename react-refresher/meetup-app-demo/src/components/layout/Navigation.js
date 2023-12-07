import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;

    & > li > a {
      text-decoration: none;
      color: white;

      &:hover {
        color: #707cc8;
    }
  }
`;

function Navigation() {
  return (
    <Header>
      <h1>React Meetups</h1>
      <NavMenu>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </NavMenu>
    </Header>
  );
}

export default Navigation;
