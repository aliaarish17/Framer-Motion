import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FM from './FM.jsx'
import FeaturesList from './FeaturesList.jsx'
import CollapseList from './CollapseList.jsx'
import Button from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />} />
        
        <Route path='/but' element={<Button/>}/>
        <Route path="/fm" element={<FM />} />
        <Route path='/list' element={<FeaturesList />}/>
        <Route path='/clist' element={<CollapseList />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)