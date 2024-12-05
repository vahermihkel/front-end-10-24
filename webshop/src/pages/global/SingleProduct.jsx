import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
//import productsFromFile from '../../data/products.json'
 
function SingleProduct() {
  const {index} = useParams();
  const [products, setProducts] = useState([]);
  const productUrl = "https://webshop-10-24-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(productUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      });  // || [] --> kui on "null", siis võta parempoolne 
  }, []);
 
 
  const found = products.find(product => product.id === Number(index))
  // URLst tuleb alati sõna, mitte number

  if (loading === true) {
    return <Spinner />
  }

  if (found === undefined) {
    return (
      <div>
        {index}
        Pärast võite pildi panna või midagi muud kui ei leia
        <div>Toodet ei leitud...</div>
      </div>
    )
  }

  return (
    <div>
    <br></br>
    <br></br>
 
    <div>Id: {found.id}</div> <br></br>
        <table className="singleProductTable">
      <td><img className="singleProductImg" src={found.image} alt=""></img> </td>
      <td> {found.title} <br></br> <b>{found.price}€</b>
 
<br></br>
<br></br>
 
      <table>
      <thead>
      <th>Rating</th>
      <th>Count</th>
      </thead>
      <td> {found.rating.rate}</td>
      <td> {found.rating.count}</td>
     </table>
     </td>
      </table>
    <br></br>
    <br></br>
    <br></br>
 
 
<div>Description:</div>
     <div> {found.description}</div> <br></br>
<div>Category: {found.category}</div> <br></br>
<div>Stock: {found.stock}</div>
{found.active  === false && <div>Active: false</div>}
 
     <br></br>
 
 
 
    </div>
  )
}
 
export default SingleProduct