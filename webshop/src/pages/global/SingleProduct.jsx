import React from 'react'
import { useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json'
 
function SingleProduct() {
  const {index} = useParams();
 
  const found = productsFromFile.find(product => product.id === Number(index))
  // URLst tuleb alati sõna, mitte number

  if (found === undefined) {
    return (
      <div>
        Pärast võite pildi panna või midagi muud kui ei leia
        <div>Toodet ei leitud...</div>
      </div>
    )
  }

  // Paus 13.15-13.30

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