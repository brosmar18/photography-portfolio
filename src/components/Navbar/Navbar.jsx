import { navLinks } from "../../constants";
import { avatar } from "../../assets";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>Lenscop</p>
      </div>
      <ul className="nav__links">
        {navLinks.map((link, index) => (
          <li key={`nav-bar-links-${index}`}>
            <a className="nav__link" href={link.route}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav__avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
