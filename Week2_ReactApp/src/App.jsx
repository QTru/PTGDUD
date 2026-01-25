import { useState } from 'react'
import './App.css'
import ProductCard from './components/React_CSS_AND_JSX/Challenge_1/ProductCard'
import Button from './components/React_CSS_AND_JSX/Challenge_2/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* React_CSS_AND_JSX Challenge 1 */}
      {/* <ProductCard></ProductCard> */}

      {/* React_CSS_AND_JSX Challenge 2 */}
      <Button type='primary'></Button>
      <Button type='danger'></Button>
      <Button type='success'></Button>
    </>
  )
}

export default App
