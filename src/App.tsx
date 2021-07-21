import React, {useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ChildMemo, Child} from './components/child';
import {useSelector, useDispatch} from 'react-redux'
import {actionNum} from './store/actions'
import type {State} from './store/reducers'

function App() {
  const {num} = useSelector((state: State) => {
    return state
  })
  const dispatch = useDispatch()
  const [val, setVal] = useState(0)
  const [count, setCount] = useState(0)

  const childNum = useMemo(() => {
    return val
  }, [val])

  function onAdd() {
    setCount(count + 1)
    dispatch(actionNum())
  }

  function onReduce() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <button onClick={() => onAdd()}>增加</button>
        <button onClick={() => onReduce()}>减少</button>
        <button onClick={() => setVal(val + 1)}>子组件增加</button>
        <p>{count}</p>
        <h3>state: {num}</h3>
      </header>
      <div>
        <ChildMemo num={childNum}/>
        <Child num={count}/>
      </div>
    </div>
  );
}

export default App;
