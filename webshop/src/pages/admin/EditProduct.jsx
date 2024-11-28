import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json'
 
function EditProduct() {
  const {index} = useParams();
  const found = productsFromFile[index];
 
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const stockRef = useRef();
  const activeRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const [idUnique, setIdUnique] = useState(true);
 
function change() {
  productsFromFile[index] = {
    "id": Number(idRef.current.value), // üksikut toodet vaatamisel
    "title": titleRef.current.value,
    "price": Number(priceRef.current.value), // ostukorvis kokkuliitmisel
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "image": imageRef.current.value,
    "stock": stockRef.current.value,
    "active": activeRef.current.checked, // panen linnukese, aga pole avalehel aktiivne
    "rating": {
            "rate": Number(rateRef.current.value),
            "count": Number(countRef.current.value)
        }
  };
}

  function checkIdUniqueness() {
    // .filter --> küsida kas .length on 0
    // .find   --> küsida kas on undefined
    // .findIndex --> küsida kas ID on -1 (see tähistab programmeerimises et indexit ei leitud)

    // .find'l on eriomadus, kui ta leiab kellegi, siis tsüklit ei jätkata.
    // 25000 toodet --> teen .filter, siis ta teeb alati lõpuni välja
    // 25000 toodet --> teen .find ja leitakse 10ndana, siis juba lõppeb
   
    const result = productsFromFile.filter(product => product.id === Number(idRef.current.value))
    if (result.length === 0) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }

    // const found = productsFromFile.find(product => product.id === Number(idRef.current.value))
    // if (found === undefined) {
    //   setIdUnique(true);
    // } else {
    //   setIdUnique(false);
    // }
  }

  if (found === undefined) {
    return (
      <div>
        Pärast võite pildi panna või midagi muud kui ei leia
        <div>Toodet ei leitud...</div>
      </div>
    )
  }
 
  return (
    <div>
      {idUnique === false && <div>Kellelgi teisel on juba sama ID olemas</div>}
      <label>Id: </label> <br></br>
        <input onChange={checkIdUniqueness} ref={idRef} type="text" defaultValue={found.id}></input> <br></br>
      <label>Title: </label> <br></br>
        <input ref={titleRef} type="text" defaultValue={found.title}></input> <br></br>
      <label>Price: </label> <br></br>
        <input ref={priceRef} type="text" defaultValue={found.price}></input> <br></br>
        <label>Description: </label> <br></br>
        <input ref={descriptionRef} type="text" defaultValue={found.description}></input> <br></br>
        <label>Category: </label> <br></br>
        <input ref={categoryRef} type="text" defaultValue={found.category}></input> <br></br>
        <label>Image: </label> <br></br>
        <input ref={imageRef} type="text" defaultValue={found.image}></input> <br></br>
        <label>Stock: </label> <br></br>
        <input ref={stockRef} type="text" defaultValue={found.stock}></input> <br></br>
        <label>Active: </label> <br></br>
        <input ref={activeRef} type="checkbox" defaultValue={found.active}></input> <br></br>
        <label>Rating rate: </label> <br></br>
        <input ref={rateRef} type="text" defaultValue={found.rating.rate}></input> <br></br>
        <label>Rating count: </label> <br></br>
        <input ref={countRef} type="text" defaultValue={found.rating.count}></input> <br></br>
 
      <Link to="/admin/maintain-products">
        <button onClick={change}>Update</button>
        </Link>
    </div>
  )
}
 
export default EditProduct