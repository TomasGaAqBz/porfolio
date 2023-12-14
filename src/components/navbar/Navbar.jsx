import React, { useEffect, useState } from 'react'
import "./navbar.css"
import {Navbar,Container,Nav,NavDropdown  } from 'react-bootstrap';


const NavBar = () => {
    //estado para marcar que boton del navbar esta activo
    const [activeLink, setActiveLink] = useState('home')
    //estado para ver cuando la persona scrollea
    const [scroll,setScroll] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            window.scrollY > 50 ? setScroll(true) : setScroll(false);
        }
        window.addEventListener("scroll",onScroll)
        return () => window.addEventListener("scroll",onScroll)
    }, [])
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scroll ? "scrolll" : ""} >
        <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' :'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' :'navbar-link' } onClick={() => onUpdateActiveLink('skill')} >Skill</Nav.Link>
                <Nav.Link href="#proyects" className={activeLink === 'proyects' ? 'active navbar-link' :'navbar-link' } onClick={() => onUpdateActiveLink('skill')} >Proyectos</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href="#"><img src="" alt="GitHub" /></a>
                    <a href="#"><img src="" alt="Linkedin" /></a>
                    <a href="#"><img src="" alt="Instagram" /></a>
                </div>
                <button className='vvd'onClick={()=> console.log(conected)} ><span>Contactame</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
    }


export default NavBar