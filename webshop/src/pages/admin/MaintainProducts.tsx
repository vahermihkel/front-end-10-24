import React, { useEffect, useRef, useState } from 'react';
// import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import styles from "../../css/MaintainProducts.module.css"
import { Product } from '../../models/Product';

 
function MaintainProducts() {
  const findRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const productUrl = "https://webshop-10-24-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
  useEffect(() => {
    fetch(productUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []));  // || [] --> kui on "null", siis võta parempoolne 
  }, []);
 
  function find() {
    const refCurrent = findRef.current;
    if (refCurrent === null) { // kui jäi HTMLi panemata
      console.log("REF JÄI HTMLI PANEMATA!!!");
      return; // edasi ei lähe
    }
    const res = products.filter(product =>
        product.title.toLowerCase().includes(refCurrent.value.toLowerCase())
        );
    setProducts(res);
  }
  
  function erase(index: number) {
    products.splice(index, 1);
    setProducts(products.slice());
    toast.success("Product is successfully deleted");
  }
 
  return (
    <div>
  <br></br>
 
      <input placeholder="otsi" onChange={find} ref={findRef} type="text"></input>
 
  <br></br>
  <br></br> 
      <table>
            <thead className={styles.thead}>
            <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating stock</th>
            <th>Rating rate</th>
            <th>Rating count</th>
            <th>Delete</th>
 
            </tr>
        </thead>
                <tbody>
        {products.map((product, index) =>
        <tr key={product.id} className={product.active ? styles.active : styles.inactive}>
            <td><img style={{width:"100px"}} src={product.image} alt="" /></td>
            <td>{product.title}</td>
            <td>Price: {product.price}€</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.stock}</td>
            <td>{product.rating.rate}</td>
            <td>{product.rating.count}</td>
            <td><button onClick={() => erase(index)}>x</button></td>
            <td>
              <Link to={"/admin/edit-product/" + index}>
                <button>Muuda</button>
              </Link>
            </td>
        </tr>
        )}
        </tbody>
        </table>
 
        <ToastContainer
      position="top-left"
      autoClose={3000}
      theme="light" />
    </div>
  )
}
 
export default MaintainProducts