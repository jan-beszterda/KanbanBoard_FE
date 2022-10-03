import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="navbar">
      <div className="container-fluid">
        <Link to="/" class="navbar-brand">
            <img src="" alt="Logo" width="60" height="60" class="d-inline-block align-text-bottom me-2" />
            boardIT
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
        <span class="navbar-text">
            &copy; 2022 boardIT, Inc.
        </span>
      </div>
    </footer>
  );
};

export default Footer;