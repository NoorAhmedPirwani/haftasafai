import logo from './logo.svg';
import './App.css';
import { UIHaftaSafai } from './components/HaftaSafaiUI';
import { LoginInpage } from './components/LoginPage';
import { SignUp } from './components/SignUpPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UIHaftaSafai></UIHaftaSafai>
        <LoginInpage></LoginInpage>
        <SignUp></SignUp>
        
      </header>
    </div>
  );
}

export default App;
