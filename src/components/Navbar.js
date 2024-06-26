import { Navbar,Container,Nav } from 'react-bootstrap'; 
import { useState , useEffect } from 'react';
import logo from '../assets/img/nav-icon3.svg';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon1.svg';
import navicon3 from '../assets/img/nav-icon1.svg';
import './Navbar.css';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const[scrolled,sescrolled]=useState(false);

  useEffect(() => {
   if (window.scrollY > 20){
     sescrolled(true);
    } else {
      sescrolled(false);
    }
    window.addEventListener('scroll',onscroll);
    return () => window.removeEventListener('scroll',onscroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled':""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={navicon1} alt=''></img></a>
              <a href='#'><img src={navicon2} alt=''></img></a>
              <a href='#'><img src={navicon3} alt=''></img></a>

            </div>
            <button className='vvd' onClick={()=> console.log ('connect')}><span>Hire me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

