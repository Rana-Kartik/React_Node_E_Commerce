
import './App.css';
import Nav from './component/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './component/Footer';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Page</h1>}></Route>
        <Route path='/addProduct' element={<h1>Add Product Page</h1>}></Route>
        <Route path='/updateProduct' element={<h1>Update Product Page</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Page</h1>}></Route>
        <Route path='/logout' element={<h1>Logout Page</h1>}></Route>
        </Route>

        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );  
}

export default App;
