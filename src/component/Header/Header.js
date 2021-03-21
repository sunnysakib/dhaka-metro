import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/Group 33141-1.png'
import './Header.css'
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        
        <div className = 'headerStyle container'>
            <Link class="navbar-brand" to='/home'><img src={logo} alt="" srcset=""/></Link>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                
                <ul class="navbar-nav nav-list headerList">
                    <li class="nav-item"><Link class="nav-link h6" to="/home">Home</Link></li>
                    <li class="nav-item"><Link class="nav-link h6" to="/destination">Destination</Link></li>
                    <li class="nav-item"><Link class="nav-link h6" to="/blog">Blog</Link></li>
                    <li class="nav-item"><Link class="nav-link h6" to="/contact">Contact</Link></li>
                   {loggedInUser.email ? <li class="nav-item"><Link class="nav-link h6" to="/">{loggedInUser.name}</Link></li> 
                   :  <li class="nav-item"><Link class="nav-link h6" to="/login">Login</Link></li>
                   }
                </ul>
            </div>
        </div>
    </nav>    
    );
};

export default Header;

