import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";
//import cartFromFile from '../../data/cart.json';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
 
 
 
function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());
 
  function addToCart(product) {
    //cartFromFile.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));

    // LocalStorage-sse ARRAY lisamiseks
    // 1. võtta localStorage-st:   localStorage.getItem
    // 2. võtta jutumärgid maha:   JSON.parse()
    // 3. pushida lisatule juurde:    .push
    // 4. panna jutumärgid tagasi:   JSON.stringify()
    // 5. panna localStorage-sse tagasi:   localStorage.setItem
  }
 
  function sortAZ() {
    products.sort((a, b) => a.title.localeCompare (b.title));
    setProducts(products.slice());
  }
 
  function sortZA() {
    products.sort((a, b) => b.title.localeCompare (a.title));
    setProducts(products.slice());
  } 
 
  function priceLowToHigh() {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }
  
  function priceHighToLow() {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }
 
  function ratingLowToHigh() {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }
  
  function ratingHighToLow() {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }
 
  return (
    <div>
      <br /><br />
      <Gallery />
      <br></br>
 
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort
        </Dropdown.Toggle>
        <Dropdown.Menu title="Sort: " id="custom-navbar-sort">
            <Dropdown.Item onClick={sortAZ}>A-Z</Dropdown.Item>
            <Dropdown.Item onClick={sortZA} >Z-A</Dropdown.Item>
            <Dropdown.Item onClick={priceLowToHigh} >Price: low to high</Dropdown.Item>
            <Dropdown.Item onClick={priceHighToLow} >Price: high to low</Dropdown.Item>
            <Dropdown.Item onClick={ratingLowToHigh} >Rating: low to high</Dropdown.Item>
            <Dropdown.Item onClick={ratingHighToLow} >Rating: high to low</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
 
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter
        </Dropdown.Toggle>
        <Dropdown.Menu title="Filter: " id="custom-navbar-sort">
            <Dropdown.Item >Clothes</Dropdown.Item>
            <Dropdown.Item >Jewelry</Dropdown.Item>
            <Dropdown.Item  >Electronics</Dropdown.Item>
            <Dropdown.Item  >Bags</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
 
      <br></br>
      <br></br> 
 
      <h1>Our products:</h1> <br></br>
 
      {products
        .filter(product => product.active === true)
        .map(product =>
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt=""></img>
          <div>{product.title}</div>
          <div>{product.price}€</div>
          <button disabled={product.stock === 0} onClick={() => addToCart(product)}>Add to cart</button>
          <Link to={"/product/" +  product.id}>
            <button>See details</button>
          </Link>
          <br></br> <br></br>
        </div>
      )}
    </div>
  )
}
 
export default HomePage