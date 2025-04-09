
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Advisor from './pages/Advisor'

import Expenses from './pages/Expenses'
import LandingPage from './pages/LandingPage'
import Report from './pages/Report'
import Budget from './pages/Budget'
import Dashboard from './pages/Dashboard'





function App() {
  

  return (
    <>
   
     <BrowserRouter>
        <Routes>
         
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
        <Route path="/" element={<LandingPage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/budget" element={<Budget />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
