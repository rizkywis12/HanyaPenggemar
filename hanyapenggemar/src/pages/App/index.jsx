import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import loginPage from '../Loginpage';
const App = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/login' element={loginPage}/>
        </Routes>
        </BrowserRouter>
      )
    }

export default App