import { Route, Routes } from 'react-router-dom'
import './App.css'
import DasboardLayout from './dashboard/DasboardLayout'
import Dashboard from './dashboard/Dashboard'
import Products from './dashboard/Products'
import Login from './pages/Login'
import Notfound from './pages/Notfound'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={<DasboardLayout />}>

          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />

        </Route>

        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Notfound/>} />
      </Routes>

    </>
  )
}

export default App
