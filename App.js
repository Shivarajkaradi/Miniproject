/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { BrowserRouter , Route,Routes ,Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Data from './components/Data';

import Sign_up from './Sign_up';
import Showcart  from './components/Show_cart';

import Home from './components/Home';



export function App( ) {


    return (
        <div className='bg-danger'>
        <div id="Top">
        <BrowserRouter>
        <div className='navbar navbar-Gold bg-dark' style={{ display: "flex", justifyContent: "space-between" }}>
        <h1><Link to="/" className="logo">
       Royal Challengers Bengaluru Store</Link></h1>
      

                <Link className="link" to="/home"><i class="fas fa-home"></i></Link>
                <Link className="link" id ="/cart" to ="/cart" > <i class="fas fa-shopping-cart"></i> </Link>
                <Link className="link" to="/signin"><b>Log in</b></Link>
        </div>
        <Routes>	
           
             <Route path='/cart' element={<Showcart/>} />
             
             <Route path='/home' element={<Home/>} />
            <Route path='/signin' element={< Sign_up />} />
        </Routes>
        </BrowserRouter>
        </div>
          <div>
            <Data/> 
          </div>

    
        
        
      
        </div>
    );



}

export default App;

