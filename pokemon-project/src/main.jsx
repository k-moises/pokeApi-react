import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import OnePokemon from './components/OnePokemon'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path='/home' element={<App/>} />
                <Route path='/pokemon/:id' element={<OnePokemon/>} />
                <Route path='*' element={<h3>Error 404</h3>} />
            </Routes>
        </BrowserRouter> 
  </>
)
