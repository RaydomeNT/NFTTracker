import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>NFT Tracker</h1></Link>
        <Link to="/tools"><h1>NFT Tools</h1></Link>
        <Link to="/projects"><h1>NFT Projects</h1></Link>
        <Link to="/twitter"><h1>NFT Twitter</h1></Link>
      <nav>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
