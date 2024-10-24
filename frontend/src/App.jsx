import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  AuthLayout from  './layout/AuthLayout'
//import clienteAxios  from './config/axios'
import Login from './paginas/Login'
import Registrar from  './paginas/Registrar'
import ConfirmarCuenta  from './paginas/ConfirmarCuenta'
import OlvidePassword  from './paginas/OlvidePassword'
function App() {
    console.log(import.meta.env.VITE_BACKEND_URL)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />} />
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
