import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Context
import { FavoritesContext } from "../../store/favorites-context";

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
    gap: 16px;

    & > li > a {
      text-decoration: none;
      color: white;

      &:hover {
        color: #707cc8;
    }
  }
`;

const FavNumberComponent = styled.span`
  margin-left: 4px;
  color: #fff;
  background-color: #707cc8;
  border-radius: 9px;
  width: 18px;
  height: 18px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
`;

function Navigation() {
  const favoritesContext = useContext(FavoritesContext);

  const [favNumber, setFavNumber] = useState(favoritesContext.totalFavorites);

  useEffect(() => {
    setFavNumber(favoritesContext.totalFavorites);
  }, [favoritesContext.totalFavorites]);

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
            <Link to="/favorites">
              Favorites
              {favNumber > 0 && (
                <FavNumberComponent>{favNumber}</FavNumberComponent>
              )}
            </Link>
          </li>
        </ul>
      </NavMenu>
    </Header>
  );
}

export default Navigation;
