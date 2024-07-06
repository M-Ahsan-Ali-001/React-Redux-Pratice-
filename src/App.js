import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import LoginState from './components/loginState';

function App() {
  return (
    <div className="App">
   <Counter/>
   <LoginState/>
    </div>
  );
}

export default App;
