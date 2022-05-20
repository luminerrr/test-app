import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increase(){
    setCount((currentCount)=>{
      return currentCount + 1; 
    })
  }

  // function getRandomInt(min, max){
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  // const id = getRandomInt(10, 100);
  

  
  const [todo, setTodo] = useState([]);
  const style = {textDecoration: todo?.completed ? "line-through" : "unset"};

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((response) => response.json())
    .then((data) => setTodo(data))
    .catch((err)=> console.log(err));
  }, [count]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Kevin.
        </p>
        <p>{count}</p>
        <button className="App-button" onClick={increase}>
          click me!
        </button>
        {!!todo ? (
          <div>
            <h1 style={style}>{todo.title}</h1>
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
        <h1>{todo.title}</h1>        
      </header>
    </div>
  );
};

export default App;
