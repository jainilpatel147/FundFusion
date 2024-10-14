import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
    <Link className="navbar-brand" to="/">Fund Fusion</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/explore">Explore</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/create">Create Campaign</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
        
      </ul>
    </div>
  </nav>
);

export default Header;
