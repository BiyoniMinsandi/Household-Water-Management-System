import React ,{ useState }from 'react';
import './navbar.css';
import { FaBars, FaTachometerAlt, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidenav ${isOpen ? 'open' : ''}`}>
            <div className="toggle-btn-container">
               <button className="toggle-btn" onClick={handleToggle}>
                   <FaBars />
                 </button>
            </div>
            <div className="icons">
                <Link to="/">
                   <FaTachometerAlt className="icon" />
                       {isOpen && <span>Dashboard</span>}
                </Link>
                <Link to="/Settings">
                   <FaCalendarAlt className="icon" />
                       {isOpen && <span>Monthly Plan Activation</span>}
                </Link>
                <Link to="/logout">
                   <FaSignOutAlt className="icon" />
                       {isOpen && <span>Log Out</span>}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
