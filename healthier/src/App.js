import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar.jsx';
import './styles/App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <NavigationBar/>
        <main>
          <div className='main-text'>
            <h1 className='calltoact'>Venha atingir seus objetivos com a gente!</h1>
            <button className='create-button' >
               <Link style={{ textDecoration: 'none' }} className='link' to='/criar-conta' ><p className='nav-link' >Criar Conta</p></Link>
            </button>
          </div>
        </main>
      </nav>
    </div>
  );
}

export default App;
