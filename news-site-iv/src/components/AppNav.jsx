
import { useState } from 'react';
import { Link } from 'react-router-dom'
import sections from '../data/sections.json';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function AppNav( {handleSearch} ) {

  const getNavItems = sections.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <div className="nav-link py-0 px-3">
          <Link to={`/sections/${item.value}`} className="text-white">
            {item.label}
          </Link>
        </div>
      </li>
    )
  })

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="/#/" className="navbar-brand border border-white px-1 rounded" >Code Platoon NEWS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            { getNavItems }
          </Nav>
          <FormControl className="search-bar" placeholder="Search by Title" onChange={(e) => handleSearch(e)}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    //   <div className="container">
    //     <a href="/#/" className="navbar-brand border border-white px-1 rounded">
    //       Code Platoon NEWS
    //     </a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav me-auto">
    //         { getNavItems }
    //       </ul>
    //       
    //     </div>
    //   </div>
    // </nav>
  )
}

export default AppNav;


// navItems = {navItems} 
// handleNavClick = {handleNavClick} 