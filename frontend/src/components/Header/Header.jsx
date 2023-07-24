import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* =========== Logo =========== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/* =========== Logo END =========== */}

            {/* =========== Menu Start =========== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((link, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={link.path}
                      className={(navCLass) => (navCLass.isActive ? "active__link" : "")}
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* =========== Menu END =========== */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btn d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
