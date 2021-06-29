import React, {useEffect} from 'react';


import './App.css';


//components
import Board from './components/Board.jsx';

function App() {


  useEffect(() => {

    console.log('use');
    

    fetch('/test')
    .then(response => response.json())
    .then(data => console.log(data));
  
  }, [])


  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
