
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Nav from './component/Nav'
import Profile from './component/Profile'

function App() {

  return (
    <>
      <div>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={ <Home/> } ></Route>
      <Route path='/about' element={ <About/> } ></Route>
      <Route path='/service' element={ <Service/> } ></Route>
      <Route path='/profile/:id' element={ <Profile/> } ></Route>


    </Routes>
      </div>
        
    </>
  )
}

export default App
