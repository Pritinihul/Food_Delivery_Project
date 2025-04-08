import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>QUICK</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="userAuth">
        <Link to="/login" className="link">Login / SignUp</Link>
      </div>
    </section>
  );
};

export default Navbar;