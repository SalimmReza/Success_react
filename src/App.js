import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Main from './components/Main/Main';
import Questions from './components/Questions/Questions';


function App() {
  return (
    <div>
      <Main></Main>

      <Questions></Questions>
    </div>
  );
}

export default App;
