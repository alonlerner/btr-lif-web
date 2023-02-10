import './App.css';
import React from 'react';
import Navbar from './Navbar'
import GameCell from './GameCell';

function App() {
  const [access, setAccess] = React.useState(false);

  return (
    <div className="App">
      {!access && <p onClick={() => setAccess(true)}>404 error: page not found.</p>}
      {access && <header className="App-header">
         <Navbar/>
         <GameCell/>
      </header>}
    </div>
  );
}

export default App;
