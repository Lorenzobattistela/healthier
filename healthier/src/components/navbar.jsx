import { Navbar } from 'react-bootstrap';
import React from 'react';
import logo from '../assets/logo.png';
import '../styles/navbar.css';
import { Link } from "react-router-dom";

class NavigationBar extends React.Component{
    render(){
        return (
            <Navbar className='nav'>
                <Navbar.Brand href="/">
                    <img src={ logo } alt='logo' className='nav-logo'/>
                </Navbar.Brand>
                <Navbar.Brand href="/"><Link to='/treinos'><p className='nav-link' >Treinos</p></Link></Navbar.Brand>
                <Navbar.Brand href="/"><Link to='/alimentacao'><p className='nav-link' >Alimentação</p></Link></Navbar.Brand>
                <Navbar.Brand href="/"><Link to='/perfil'><p className='nav-link' >Perfil</p></Link></Navbar.Brand>
                <button className='login-button' >
                    <Navbar.Brand  href="/"><Link to='/login'><p className='nav-link' >Login</p></Link></Navbar.Brand>
                </button>
                <button className='create-button' >
                    <Navbar.Brand  href="/"><Link to='/criar-conta' ><p className='nav-link' >Criar Conta</p></Link></Navbar.Brand>
                </button>
            </Navbar>
        )
    }
}

export default NavigationBar;