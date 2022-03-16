import LoginForm from '../components/login-form.jsx';
import NavigationBar from '../components/navbar.jsx';

export default function Login() {
    return (
        <div>
            <NavigationBar/>
            <div className='form-login'>
                <LoginForm/>
            </div>
        </div>
    )
}