 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Rooms from './Components/Rooms/Rooms';
import Singleroom from './Components/Single room/Singleroom';
import Nav from './Components/Nav/Nav';
//import Stripe from './Components/Stripe/Stripe';
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/singleroom/:slug' element={<Singleroom/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
