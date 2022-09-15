import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>NFT Tracker</h1></Link>
        <Link to="/tools"><h1>NFT Tools</h1></Link>
      </div>
    </header>
  );
};

export default Navbar;
