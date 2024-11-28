import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
 
 
function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const findRef = useRef();
 
  function find() {
    const res = productsFromFile.filter(product =>
        product.title.toLowerCase().includes(findRef.current.value.toLowerCase())
        );
    setProducts(res);
  }
  
  function erase(index) {
    products.splice(index, 1);
    setProducts(products.slice());
    toast.success("Product is successfully deleted");
  }
 
  return (
    <div>
  <br></br>
 
      <input placeHolder="otsi" onChange={find} ref={findRef} type="text"></input>
 
  <br></br>
  <br></br> 
      <table>
            <thead>
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
        <tr key={product.id} className={product.active ? "product-active" : "inactive"}>
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