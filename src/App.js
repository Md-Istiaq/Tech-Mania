import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './component/Blogs/Blogs';
import Home from './component/Home/Home';
import ProductDetails from './component/Home/ProductDetails/ProductDetails';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequirAuth from './component/RequirAuth/RequirAuth';
import ManageInventory from './component/Home/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/product/:id' element={
      <RequirAuth>
        <ProductDetails/>
      </RequirAuth>
      }></Route>
      <Route path='/manageitem' element={
      <RequirAuth>
        <ManageInventory/>
      </RequirAuth>
      }></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
