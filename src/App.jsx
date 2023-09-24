
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Mainleft from './components/Mainleft'
import Profile from './pages/Profile'
import Wallet from './pages/Wallet'
import Market from './pages/Market'
import Friends from './pages/Friends'




function App() {




  return (
    <>

    <BrowserRouter>

      <Navbar/>
      <div className="home">
      <Mainleft/>
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/wallet' element={<Wallet/>}></Route>
        <Route path='/market' element={<Market/>}></Route>
        <Route path='/friends' element={<Friends/>}></Route>
      </Routes>
      </div>


    </BrowserRouter>
    </>
  )
}

export default App
