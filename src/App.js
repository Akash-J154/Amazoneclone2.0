
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from './Signin';
import Cart from './Cart'
import Homepage from './Homepage';
import Signup from './Signup';
import Checkout from './Checkout';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route  exact path="/" element={<Homepage/>}></Route>
      <Route exact path='/Signin' element={<Signin/>}></Route>
      <Route exact path='/Cart' element={<Cart/>}></Route>
      <Route exact path='/Signup' element={<Signup/>}></Route>    
      <Route exact path='/Cart/Checkout' element={<Checkout/>}></Route>
    </Routes>
    
    </Router>
   </>
  );
}

export default App;
