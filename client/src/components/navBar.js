import { useState,useEffect } from "react"
import {Navbar,Container,Nav} from "react-bootstrap"
import logo from '../assets/img/logo-1.png'


export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50 ){
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onscroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar  expand="lg" className={scrolled ?  "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
        <span className="navbar-togller-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#picture" className={activeLink === 'picture' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('picture')}>Pictures</Nav.Link>
          </Nav>
          <span className="navbar-text">
            
            <button className="vvd" onClick={() => console.log('Logging out ')}><span>Log out</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}