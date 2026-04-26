import { BrowserRouter } from 'react-router-dom'
import Home_RecipeListing from './components/Home_RecipeListing'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Home_RecipeListing />
    </BrowserRouter>
  )
}

export default App
