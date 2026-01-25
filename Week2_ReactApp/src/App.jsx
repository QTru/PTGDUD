import { useState } from 'react'
import './App.css'
import ProductCard from './components/React_CSS_AND_JSX/Challenge_1/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ProductCard></ProductCard>
  )
}

export default App
