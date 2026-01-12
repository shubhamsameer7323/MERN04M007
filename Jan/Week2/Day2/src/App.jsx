import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Foods from './components/Foods'
import About from './components/About'
import Food from './components/Food'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/login'
import Register from './components/register'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/foods' element={
          <PrivateRoute>
            <Foods/>
          </PrivateRoute>
        }></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/food/:id' element={<Food/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App