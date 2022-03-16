import React from 'react';
import '../styles/login.css';
import Form from 'react-bootstrap/Form'



// USER: NAME, EMAIL, PASSWORD, BIRTHDAY
class LoginForm extends React.Component{
    render(){
        return (
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Endereço de e-mail</Form.Label>
                    <Form.Control required className='field' type="email" placeholder="Digite seu e-mail" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control required className='field' type="password" placeholder="Digite sua senha" />
                </Form.Group>
                <button formAction='/login' formMethod='post'  className='form-button' type='submit'>Enviar</button>
            </Form>
        )
    }
}

export default LoginForm;