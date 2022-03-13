import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import NavigationBar from './components/navbar.jsx';
import './styles/App.css';

function App() {
  return (
    <div>
      <nav>
        <NavigationBar/>
      </nav>
    </div>
  );
}

export default App;
