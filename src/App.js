import logo from './logo.svg';
import './App.css';
import { UIHaftaSafai } from './components/HaftaSafaiUI';
import { LoginInpage } from './components/LoginPage';
import { SignUp } from './components/SignUpPage';
import { useState } from 'react';

function App() {

  const [view, setView] = useState("home");
  let renderComponent;

  switch(view) {
    case "home":
      renderComponent = <UIHaftaSafai setView={setView} />;
    break;
    case "register":
      renderComponent = <SignUp setView={setView} />;
    break;
    case "login":
      renderComponent = <LoginInpage setView={setView} />;
    break;
    default:
      renderComponent = <UIHaftaSafai setView={setView} />;
    break;
  }

  return (
    <div className="App">
      <header className="App-header">
        {renderComponent}
      </header>
    </div>
  );
}

export default App;
