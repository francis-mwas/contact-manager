import React from 'react'
import { Link } from 'react-router-dom';


const Header = (props)=> {

    const { branding } = props;

    return (
       <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb3 py-0">
           <div className="container">
               <a href="/" className="navbar-brand">
                  { branding }
               </a>
               <div>
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item nav-link active">
                           <Link to="/" className="nav-link"> <i className="fas fa-home"></i> Home</Link>
                       </li>
                       <li className="nav-item nav-link active">
                           <Link to="/contacts/add" className="nav-link"> <i className="fas fa-plus"></i> Add Contact</Link>
                       </li>
                       <li className="nav-item nav-link active">
                           <Link to="/about" className="nav-link"> <i className="fas fa-info"></i> About</Link>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
    )
}

export default Header;
