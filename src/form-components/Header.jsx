import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" class="navbar-brand">
          <Button type={"button"}>
            <img src="" alt="Logo" width="60" height="60" class="d-inline-block align-text-bottom me-2" />
            boardIT
          </Button>
        </Link>
        <ul class="nav justify-content-end">
          {/* if user NOT logged in show these */}
          <li class="nav-item">
            <Link to="sign-in" class="nav-link">
              <Button className={"btn"} type={"button"}>
                Sign in
              </Button>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="sign-up" class="nav-link">
              <Button className={"btn"} type={"button"}>
                Sign up
              </Button>
            </Link>
          </li>
          {/* otherwise show this 
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
              Welcome, {{ username }}
              <ICON>
            </a>
            <ul class="dropdown-menu">
              <li>
                <Link to="/profile" class="dropdown-item">
                  Your profile
                </Link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <Link to="/teams" class="dropdown-item">
                  Your teams
                </Link>
              </li>
              <li>
                <Link to="/boards" class="dropdown-item">
                  Your boards
                </Link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item">
                  Log out
                </a>
              </li>
            </ul>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;