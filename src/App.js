import './App.css';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import React from 'react';

function App() {
  const isLogged = false;
  return (
    <div className="App">
      {isLogged ? (
        <div>
          <Nav></Nav>
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}

export default App;
