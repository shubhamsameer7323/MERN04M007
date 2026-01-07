
import { Route , Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Service from './components/Service'
import Profile from './components/Profile'
import Cart from './components/Cart'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } ></Route>
        <Route path='/about' element={ <About/> } ></Route>
        <Route path='/service' element={ <Service/> } ></Route>
        <Route path='/login' element={ <Login/> } ></Route>
        <Route path='/dashboard' element={ <Dashboard/> } >
          <Route path='profile/:id' element={ <Profile/> }></Route>
          <Route index element={ <Cart/> }></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App


// index means default.
// id: parameter.
// useparams jo bhi value doge use wo search krenge.