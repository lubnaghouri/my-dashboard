import { Route, Routes } from 'react-router-dom'
import './App.css'
import DasboardLayout from './dashboard/DasboardLayout'
import Dashboard from './dashboard/Dashboard'
import Products from './dashboard/Products'
import Create from './dashboard/Create'
import EditForm from './dashboard/EditForm'
import Analytics from './dashboard/Analytics'

import Login from './pages/Login'
import Notfound from './pages/Notfound'
import AuthForm from './pages/AuthForm'
import SignupForm from './pages/SignupForm'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={<DasboardLayout />}>

          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='products/create' element={<Create />} />
          <Route path='products/edit/:id' element={<EditForm />} />
        </Route>

  <Route path='login' element={<AuthForm />} />
  <Route path='signup' element={<SignupForm />} />
  <Route path='*' element={<Notfound />} />
      </Routes>

    </>
  )
}

export default App
