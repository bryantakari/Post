import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
// useEffect({},[])
function SideMenu() {
  return (
    
    <div className='sideMenu  bg-dark'>
      
        <div className='text-light sideItemContainer w-100 d-flex flex-column align-items-right'>
            <div className='sideItem'>Forum</div>
        </div>
    </div>
  );
}

export default SideMenu;