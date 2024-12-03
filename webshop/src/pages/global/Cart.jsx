import React, { useState } from 'react' // node_modules
import { Link } from 'react-router-dom' // node_modules
//import cartJSON from "../../data/cart.json" // meie fail
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import "../../css/Cart.css"; // laiendi ei pea panema .js failidele
// ülejäänutele peab kirjutama faili lõppu laiendi: .css, .json, .svg, .png
 
function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  function eraseByOne (index) {
    products.splice(index, 1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  function emptyCart () {
    products.splice(0); 
    setProducts(products.slice()); // HTMLi uuendamiseks
    localStorage.setItem("cart", JSON.stringify(products)); // salvestuseks
  }
  
  const sumPrice = ( ) => {
  let sum = 0;
  products.forEach(product => sum = sum + product.price);
  return sum;
  }
//  const sumPcs = ( ) => {
//     let sum = 0;
//     products.forEach(product => sum = sum += product.id);
//     return sum;
//  }   
  return (
    <div>
      {products.length > 0 && 
      <>
        <button onClick={emptyCart} >Clear</button>
        <div>{products.length} pcs</div>
      </>}
 
      {products.map(product => 
      <div className="product" key={product.id}>
        <span className="product-left">
          <img className="image" src={product.image} alt="" />
          <div className="title">{product.title}</div>
        </span>
        <span className="product-right">
          <div className="price">{product.price.toFixed(2)}€</div>
          <button className="button" onClick={() =>eraseByOne(product)}>x</button>
        </span>
      </div>
 
    )}
    {/* <div>Total products: {sumPcs()} pcs</div><br /> */}
 
      {products.length === 0 &&<div>Cart is empty: <Link to="/">
      Go to Home Page
      </Link></div>} 
 
      {products.length > 0 &&
      <>
        <div>Total price €: {sumPrice().toFixed(2)} €</div><br />
        <ParcelMachines />
        <Payment sum={sumPrice().toFixed(2)} />
      </>}
    </div>
  )
}
 
export default Cart