import React, {useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ChildMemo, Child} from './components/child';

function App() {
  const [val, setVal] = useState(0)
  const [count, setCount] = useState(0)

  const childNum = useMemo(() => {
    return val
  }, [val])
  function onAdd () {
    setCount(count + 1)
  }
  function onReduce () {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => onAdd()}>增加</button>
        <button onClick={() => onReduce()}>减少</button>
        <button onClick={() => setVal(val + 1)}>子组件增加</button>
        <p>{count}</p>
      </header>
      <div>
        <ChildMemo num={childNum}/>
        <Child num={count}/>
      </div>
    </div>
  );
}

export default App;
