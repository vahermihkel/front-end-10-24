import React, { useState } from 'react' // node_modules
import { Link } from 'react-router-dom' // node_modules
import cartJSON from "../../data/cart.json" // meie fail
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
 
function Cart() {
        const [products, setProducts] = useState(cartJSON.slice());
 
         function eraseByOne (index) {
            cartJSON.splice(index, 1);
            setProducts(cartJSON.slice());
 
         }
         function emptyCart () {
            cartJSON.splice(0); 
            setProducts(cartJSON.slice());
 
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
      <div key={product.id}>
        <img  src={product.image} style= {{"width": "50px"}} alt="" />
 
            <div>{product.title}</div>
            <div>Price: {product.price.toFixed(2)}€</div>
 
        <button onClick={() =>eraseByOne(product)}>x</button>
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