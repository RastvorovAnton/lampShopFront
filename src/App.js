import Header from './HeadersComponents/Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarterStore from './HeadersComponents/StarterStore/StarterStore';
import SignUp from './HeadersComponents/SignUp/SignUp';
import SignIn from './HeadersComponents/SignIn/SignIn';
import Cart from './HeadersComponents/Cart/Cart';
import Product from './HeadersComponents/StarterStore/Product/Product';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/starter-store' element={<StarterStore />} />
        <Route path='/' element={<StarterStore />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='starter-store/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
