
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextPovider from './context/AuthContextPovider.jsx'


createRoot(document.getElementById('root')).render(

  <AuthContextPovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextPovider>

)
