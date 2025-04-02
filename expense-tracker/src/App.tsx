
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Advisor from './pages/Advisor'

import Expenses from './pages/Expenses'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'
import Budget from './pages/Budget'




function App() {
  

  return (
    <>
   
     <BrowserRouter>
        <Routes>
         
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
        
          <Route path="/report" element={<Report />} />
          <Route path="/budget" element={<Budget />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
