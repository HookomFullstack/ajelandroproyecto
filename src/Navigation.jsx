import { BrowserRouter, Navigate, Route, Routes, redirect } from "react-router-dom/dist"
import { LoginPage } from "./pages/auth/LoginPage"
import { RegisterPage } from "./pages/auth/RegisterPage"
import { Index } from "./pages/dashboard/Index"
import { CasesPage } from "./pages/dashboard/cases/CasesPage"
import { ClientPage } from "./pages/dashboard/expedents/ExpedentPage"

export const Navigation = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={window.location.pathname == '/' ? window.location.pathname = '/dashboard' : window.location.pathname ='/login' } />  */}
        
        <Route path='/' element={<LoginPage />} /> 
        <Route path='/register' element={<RegisterPage />} /> 
        <Route path='/dashboard' element={<Index/>} /> 
        <Route path='/dashboard/cases' element={<CasesPage/>} /> 
        <Route path='/dashboard/clients' element={<ClientPage/>} />         
      </Routes>
    </BrowserRouter>

  )
}
