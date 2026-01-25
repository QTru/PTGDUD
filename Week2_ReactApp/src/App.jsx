import { useState } from 'react'
import './App.css'
import ProductCard from './components/React_CSS_AND_JSX/Challenge_1/ProductCard'
import Button from './components/React_CSS_AND_JSX/Challenge_2/Button'
import AlertButton from './components/React_CSS_AND_JSX/Challenge_3/AlertButton'
import Alert from './components/React_CSS_AND_JSX/Challenge_3/Alert'

function App() {
  const [state, setState] = useState('success')

  return (
    <>
      {/* React_CSS_AND_JSX Challenge 1 */}
      {/* <ProductCard></ProductCard> */}

      {/* React_CSS_AND_JSX Challenge 2 */}
      {/* <Button type='primary'></Button>
      <Button type='danger'></Button>
      <Button type='success'></Button> */}

      {/* React_CSS_AND_JSX Challenge 3 */}
      <Alert state={state}></Alert>
      <AlertButton type='success' onClick={() => setState('success')}></AlertButton>
      <AlertButton type='warning' onClick={() => setState('warning')}></AlertButton>
      <AlertButton type='error'  onClick={() => setState('error')}></AlertButton>
    </>
  )
}

export default App
