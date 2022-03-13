import { Navbar } from 'react-bootstrap';
import React from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

class NavigationBar extends React.Component{
    render(){
        return (
            <Navbar className='nav'>
                <Navbar.Brand href="/">
                    <img src={ logo } alt='logo' className='nav-logo'/>
                </Navbar.Brand>
                <Navbar.Brand href="/"><p className='nav-link' >Treinos</p></Navbar.Brand>
                <Navbar.Brand href="/"><p className='nav-link' >Alimentação</p></Navbar.Brand>
                <Navbar.Brand href="/"><p className='nav-link' >Perfil</p></Navbar.Brand>
                <button className='login-button' >
                    <Navbar.Brand  href="/"><p className='nav-link' >Login</p></Navbar.Brand>
                </button>
                <button className='create-button' >
                    <Navbar.Brand  href="/"><p className='nav-link' >Criar Conta</p></Navbar.Brand>
                </button>
            </Navbar>
        )
    }
}

export default NavigationBar;