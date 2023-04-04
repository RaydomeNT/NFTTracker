import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/"><h1>NFT Tracker</h1></Link>
        <Link to="/tools"><h1>NFT Tools</h1></Link>
        <Link to="/projects"><h1>NFT Projects</h1></Link>
        <Link to="/twitter"><h1>NFT Twitter</h1></Link>
        <Link to="/settings"><h1>Settings</h1></Link>
      <nav>
        {user && (
          <div>
            <span className="userDisplay">{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
