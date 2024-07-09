import React from 'react'
import './App.css'
 import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {ProductListing} from "./Pages/ProductListing";
import { CartPage} from "./Pages/CartItems";
import {Checkout} from "./Pages/CheckOut";




function App() {
  

  return (
   <div >




<Router>
<Routes>

<Route path='/' element={<ProductListing/>}/>

<Route path='/cart' element={<CartPage/>}/>

<Route path='/checkout' element={<Checkout/>}/>

</Routes>

</Router>






   </div>
  )
}

export default App;
