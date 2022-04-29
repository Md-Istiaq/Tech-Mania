import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './component/Blogs/Blogs';
import Home from './component/Home/Home';
import ProductDetails from './component/Home/ProductDetails/ProductDetails';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/inventory/:id' element={<ProductDetails/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/productdetails' element={<ProductDetails/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
