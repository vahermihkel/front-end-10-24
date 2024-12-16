import React, { useContext, useEffect, useState } from 'react';
// import productsFromFile from "../../data/products.json";
//import cartFromFile from '../../data/cart.json';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import styles from "../../css/HomePage.module.css";
import { CartSumContext } from '../../store/CartSumContext';
// kui impordin: import "../../css/HomePage.css"; läheb üle terve projekti
// pean importima, et ta oleks ainult siin failis kasutusel:
// import MUUTUJA_NIMI from "../../css/HomePage.css";
 
function HomePage() {
  // const [products, setProducts] = useState(productsFromFile.slice());
  const [categories, setCategories] = useState([]);
  const categoryUrl = "https://webshop-10-24-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const {setCartSum} = useContext(CartSumContext);

  useEffect(() => {
    fetch(categoryUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));  // || [] --> kui on "null", siis võta parempoolne 
  }, []);

  const [products, setProducts] = useState([]);
  const productUrl = "https://webshop-10-24-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
  useEffect(() => {
    fetch(productUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []));  // || [] --> kui on "null", siis võta parempoolne 
  }, []);
 
              // see mis avalehelt tuleb - ilma koguseta
  function addToCart(product) {
    //cartFromFile.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const found = cartLS.find(cartProduct => cartProduct.toode.id === product.id)
    if (found !== undefined) {
      // kui ta juba on olemas, siis suurendan kogust
      found.kogus++;
      // product.kogus += 1;
      // product.kogus = product.kogus + 1;
    } else {
      // kui teda pole olemas, siis pushin
      cartLS.push({"toode": product, "kogus": 1});
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));

    let sum = 0;
    cartLS.forEach(cartProduct => sum = sum + cartProduct.toode.price * cartProduct.kogus);
    setCartSum(sum);
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

  function filterByCategory(categoryClicked) {
    const result = products.filter(product => product.category === categoryClicked);
    setProducts(result);
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
            {/* <Dropdown.Item >Clothes</Dropdown.Item>
            <Dropdown.Item >Jewelry</Dropdown.Item>
            <Dropdown.Item  >Electronics</Dropdown.Item>
            <Dropdown.Item  >Bags</Dropdown.Item> */}
            {categories.map(category => 
              <Dropdown.Item onClick={() => filterByCategory(category)} key={category}>{category}</Dropdown.Item>
            )}
        </Dropdown.Menu>
      </Dropdown>
 
      <br></br>
      <br></br> 

      <div>Total products: {products.length}</div>
 
      <h1>Our products:</h1> <br></br>
 
      <div className={styles.products}>
        {products
          .filter(product => product.active === true)
          .map(product =>
          <div className={styles.product} key={product.id}>
            <img src={product.image} alt=""></img>
            <div className={styles.title}>{product.title}</div>
            <div>{product.price}€</div>
            <button disabled={product.stock === 0} onClick={() => addToCart(product)}>Add to cart</button>
            <Link to={"/product/" +  product.id}>
              <button>See details</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
 
export default HomePage