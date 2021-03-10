import React from "react";
import logoImg from "../img/page-logo.png";
import { NavLink } from "react-router-dom";

const list = [
  { name: "Strona główna", path: "/", exact: true },
  { name: "O blogu", path: "/blog", exact: true },
  { name: "Spis treści", path: "/list", exact: true },
  { name: "Źródła", path: "/sources", exact: true },
  { name: "Kontakt", path: "/contact", exact: true },
];

class Header extends React.Component {
  state = {
    menuOpen: true,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        menuOpen: !prevState.menuOpen,
      };
    });

    const { isMenuOpen } = this.props;

    isMenuOpen(this.state.menuOpen);
  };

  render() {
    const menu = list.map((item) => (
      <NavLink
        className="app-header__mobile-navigation-link"
        key={item.name}
        to={item.path}
        exact={item.exact}
      >
        <li className="app-header__mobile-navigation-link-container">
          <div className="app-header__mobile-navigation-link-liquid">
            {item.name}
          </div>
        </li>
      </NavLink>
    ));

    const menuDesk = list.map((item) => (
      <NavLink
        className="app-header__navigation-link"
        key={item.name}
        to={item.path}
        exact={item.exact}
      >
        <li className="app-header__navigation-link-container">
          <div className="app-header__navigation-link-liquid">{item.name}</div>
        </li>
      </NavLink>
    ));

    const menuOpenStyle = {
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    };

    return (
      <header className="app-header">
        <h1 className="app-header__text">Praktyczny Rodzic</h1>

        <nav className="app-header__mobile-navigation-container">
          <ul className="app-header__mobile-navigation-list">{menu}</ul>
        </nav>

        <nav className="app-header__navigation-container">
          <ul className="app-header__navigation-list">{menuDesk}</ul>
        </nav>

        <div className="app-header__logo-container">
          <img
            className="app-header__logo"
            src={logoImg}
            alt="Logo. drawing of father and son walking. You can see them from the back"
          />
        </div>

        <div
          className="app-header__hamburger-menu"
          onClick={this.handleClick}
          style={this.state.menuOpen ? {} : menuOpenStyle}
        >
          <div
            className="app-header__hamburger-menu-bar"
            style={
              this.state.menuOpen
                ? {}
                : {
                    transform: "rotate(45deg) translate(6px,5px)",
                    width: "110%",
                  }
            }
          ></div>
          <div
            className="app-header__hamburger-menu-bar"
            style={this.state.menuOpen ? {} : { opacity: "0" }}
          ></div>
          <div
            className="app-header__hamburger-menu-bar"
            style={
              this.state.menuOpen
                ? {}
                : {
                    transform: "rotate(-45deg) translate(6px,-5px)",
                    width: "110%",
                  }
            }
          ></div>
        </div>
      </header>
    );
  }
}
export default Header;
