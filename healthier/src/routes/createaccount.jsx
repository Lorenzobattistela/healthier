import CreateAccountForm from '../components/create-account-form';
import NavigationBar from '../components/navbar.jsx';

export default function Login() {
    return (
      <div>
        <NavigationBar/>
        <div className='form-create'>
          <CreateAccountForm/>
        </div>
      </div>
    );
  }
