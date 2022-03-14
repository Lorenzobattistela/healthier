
import React from 'react';
import '../styles/createaccount.css';
import Form from 'react-bootstrap/Form'



// USER: NAME, EMAIL, PASSWORD, BIRTHDAY
class CreateAccountForm extends React.Component{
    render(){
        return (
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Endereço de e-mail</Form.Label>
                    <Form.Control className='field' type="email" placeholder="Digite seu e-mail" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control className='field' type="text" placeholder="Digite seu nome completo" />
                </Form.Group>

                <Form.Group controlId="formBasicBirthday">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control className='field' type="date" placeholder="Digite sua data de nascimento" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control className='field' type="password" placeholder="Digite sua senha" />
                </Form.Group>
                <button className='form-button' type='submit'>Enviar</button>
            </Form>
        )
    }
}

export default CreateAccountForm;