import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Blogs from './component/Blogs/Blogs';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
