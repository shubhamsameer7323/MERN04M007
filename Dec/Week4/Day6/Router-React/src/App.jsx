
import { Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import WrongPath from './components/WrongPath'

function App() {
    // give me the browserRouter to the parent.
    // create Routes
    // Create route
      // =>Inside the route declare the path and declare the element which follow the Path

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/about' element= { <About /> } ></Route>
        <Route path='/dashboard' element= { <Dashboard /> } ></Route>
        <Route path= '*' element= { <WrongPath /> } ></Route>
      </Routes> 
    </div>
  )
}

export default App
