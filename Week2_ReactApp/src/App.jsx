import { useState } from 'react'
import './App.css'
import ProductCard from './components/React_CSS_AND_JSX/Challenge_1/ProductCard'
import Button from './components/React_CSS_AND_JSX/Challenge_2/Button'
import AlertButton from './components/React_CSS_AND_JSX/Challenge_3/AlertButton'
import Alert from './components/React_CSS_AND_JSX/Challenge_3/Alert'
import LoginForm from './components/React_CSS_AND_JSX/Challenge_4/LoginForm'
import ProductList from './components/React_CSS_AND_JSX/Challenge_5/ProductList'
import Header from './components/React_Fundamentals_AND_JSX/Challenge_1/Header'
import StudentInfo from './components/React_Fundamentals_AND_JSX/Challenge_1/StudentInfo'
import Footer from './components/React_Fundamentals_AND_JSX/Challenge_1/Footer'
import Count from './components/React_Fundamentals_AND_JSX/Challenge_2/Count'
import CountButton from './components/React_Fundamentals_AND_JSX/Challenge_2/CountButton'
import DynamicForm from './components/React_Fundamentals_AND_JSX/Challenge_3/DynamicForm'
import StatusBadge from './components/React_Fundamentals_AND_JSX/Challenge_4/StatusBadge'
import StatusButton from './components/React_Fundamentals_AND_JSX/Challenge_4/StatusButton'
import TodoInput from './components/React_Fundamentals_AND_JSX/Challenge_5/TodoInput'
import PersonalInfo from './components/React_Hook/Challenge_1/PersonalInfo'

function App() {
  // const [state, setState] = useState('success');
  // const [isLogin, setLogin] = useState(false);
  // const [count, setCount] = useState(0);
  // const [status, setStatus] = useState('online');
  // const [todos, setTodos] = useState({isOpen: false, todoList: []});
  const [info, setInfo] = useState({name: '', email: '', age: -1});

  return (
    <>
      {/* React_CSS_AND_JSX Challenge 1 */}
      {/* <ProductCard></ProductCard> */}

      {/* React_CSS_AND_JSX Challenge 2 */}
      {/* <Button type='primary'></Button>
      <Button type='danger'></Button>
      <Button type='success'></Button> */}

      {/* React_CSS_AND_JSX Challenge 3 */}
      {/* <Alert state={state}></Alert>
      <AlertButton type='success' onClick={() => setState('success')}></AlertButton>
      <AlertButton type='warning' onClick={() => setState('warning')}></AlertButton>
      <AlertButton type='error'  onClick={() => setState('error')}></AlertButton> */}

      {/* React_CSS_AND_JSX Challenge 4 */}
      {/* <button type="button" onClick={() => setLogin(true)} style={{ color: 'white' }}>Login</button>
      <LoginForm isLogin={isLogin} onExit={() => setLogin(false)}></LoginForm> */}

      {/* React_CSS_AND_JSX Challenge 5 */}
      {/* <ProductList></ProductList> */}

      {/* React_Fundamentals_AND_JSX Challenge 1 */}
      {/* <Header></Header>
      <StudentInfo name='John Smith' id='12345678' class='A1'></StudentInfo>
      <Footer></Footer> */}

      {/* React_Fundamentals_AND_JSX Challenge 2 */}
      {/* <CountButton operation='-' subtraction={() => setCount(Math.max(0, count - 1))}></CountButton>
      <Count count={count}></Count>
      <CountButton operation='+' addition={() => setCount(count + 1)}></CountButton>
      <CountButton operation='reset' reset={() => setCount(0)}></CountButton> */}

      {/* React_Fundamentals_AND_JSX Challenge 3 */}
      {/* <DynamicForm></DynamicForm> */}

      {/* React_Fundamentals_AND_JSX Challenge 4 */}
      {/* <StatusBadge status={status}></StatusBadge>
      <StatusButton onClick={() => setStatus('online')}>Online</StatusButton>
      <StatusButton onClick={() => setStatus('offline')}>Offline</StatusButton>
      <StatusButton onClick={() => setStatus('busy')}>Busy</StatusButton> */}

      {/* React_Fundamentals_AND_JSX Challenge 5 */}
      {/* <TodoInput todos={todos} setTodos={x => setTodos(x)}></TodoInput> */}

      {/* React_Hook Challenge 1 */}
      <PersonalInfo info={info} setInfo={x => setInfo(x)}></PersonalInfo>
    </>
  )
}

export default App
