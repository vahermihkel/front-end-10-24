import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/global/HomePage';
// import ContactUs from './pages/global/ContactUs';
// import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import Supplier from './pages/admin/api/Supplier';
import Books from './pages/admin/api/Books';
import Books2 from './pages/admin/api/Books2';
import Countries2 from './pages/admin/api/Countries2';
import Countries from './pages/admin/api/Countries';
import Electricity from './pages/admin/api/Electricity';
import Floods from './pages/admin/api/Floods';
import SupplierEscuela from './pages/admin/api/SupplierEscuela';
import Vocabulary from './pages/admin/api/Vocabulary';
import Cars from './pages/admin/api/Cars';
import MaintainProducts from './pages/admin/MaintainProducts';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import SingleProduct from './pages/global/SingleProduct';
// import SingleProduct from './pages/global/SingleProduct';
// import AdminHome from './pages/admin/AdminHome';
// import AddProduct from './pages/admin/AddProduct';
// import EditProduct from './pages/admin/EditProduct';
// import MaintainProducts from './pages/admin/MaintainProducts';
// import MaintainCategories from './pages/admin/MaintainCategories';
// import MaintainShops from './pages/admin/MaintainShops';
// import Login from './pages/auth/Login';
// import Signup from './pages/auth/Signup';
// import NotFound from './pages/global/NotFound';
 
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
 
      <Routes>
        <Route path="" element={ <HomePage />}></Route>
        {/* <Route path="contact" element={ <ContactUs />}></Route>
        <Route path="shops" element={ <Shops />}></Route> */}
        <Route path="cart" element={ <Cart />}></Route>
        {/* 
        <Route path="admin" element={ <AdminHome />}></Route>
        <Route path="admin/maintain-categories" element={ <MaintainCategories />}></Route>
        <Route path="admin/maintain-shops" element={ <MaintainShops />}></Route> */}
        <Route path="product/:index" element={ <SingleProduct />}></Route>
        <Route path="admin/add-product" element={ <AddProduct />}></Route>
        <Route path="admin/edit-product/:index" element={ <EditProduct />}></Route>
        <Route path="admin/maintain-products" element={ <MaintainProducts />}></Route>
        <Route path="admin/supplier" element={ <Supplier />}></Route>
        <Route path="admin/books" element={ <Books />}></Route>
        <Route path="admin/books2" element={ <Books2 />}></Route>
        <Route path="admin/countries" element={ <Countries />}></Route>
        <Route path="admin/cars" element={ <Cars />}></Route>
        <Route path="admin/countries2" element={ <Countries2 />}></Route>
        <Route path="admin/electricity" element={ <Electricity />}></Route>
        <Route path="admin/floods" element={ <Floods />}></Route>
        <Route path="admin/supplier-escuela" element={ <SupplierEscuela />}></Route>
        <Route path="admin/vocabulary" element={ <Vocabulary />}></Route>



        {/* <Route path="login" element={ <Login />}></Route>
        <Route path="signup" element={ <Signup />}></Route>
 
        <Route path="*" element={ <NotFound />}></Route> */}
 
 
 
      </Routes>
 
    </div>
  );
}
 
export default App;

// back-end --> peita mingit koodi
// kui tuleb mass inimesi peale, siis saab paremini hakkama