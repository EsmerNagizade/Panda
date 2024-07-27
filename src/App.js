import React from 'react'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsDetails from './pages/NewsDetails';


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}>
        
       </Route>
       <Route path="/news" element={<NewsDetails/>}>
        
        </Route>
     </Routes>
   
    </div>
  )
}

export default App
