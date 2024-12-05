import React, {useEffect, useRef, useState } from 'react'
// import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
 
function AddProduct() {
 
 
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

    const [products, setProducts] = useState([]);
    const productUrl = "https://webshop-10-24-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
    useEffect(() => {
      fetch(productUrl)
        .then(res => res.json())
        .then(json => setProducts(json || []));  // || [] --> kui on "null", siis võta parempoolne 
    }, []);
// products???
// kui lisada siis refreshiga kustub ära ei salvesta
 
 
    const add = () => {
        products.push(
            {
                "id": idRef.current.value,
                "title": titleRef.current.value,
                "price": Number(priceRef.current.value),
                "description": descriptionRef.current.value,
                "category": categoryRef.current.value,
                "image": imageRef.current.value, 
                "stock": Number(stockRef.current.value), 
                "active": activeRef.current.checked, 
                "rating": {
                   "rate": Number(rateRef.current.value),
                   "count": Number(countRef.current.value)
                }
            }
        );
 
        idRef.current.value = "";
        toast.success("Product added!");
        fetch(productUrl, {method: "PUT", body: JSON.stringify(products)});
        // õige arendus: saadame toote back-endi, et back-end paneks andmebaasi
    }

  return (
    <div>
        <label >New ID: <input ref={idRef}type="number" /></label>
        <br />
        <label>New product title: <input ref={titleRef }type="text" /></label>
         <br />
        <label>New price: <input ref={priceRef }type="number" /></label><br />
        <label>Description: <input ref={descriptionRef }type="text" /></label><br />
        <label>Category <input ref={categoryRef }type="text" /></label><br />
        <label>New picture: <input ref={imageRef }type="text" /></label><br />
        <label>Stock: <input ref={stockRef }type="number" /></label><br />
        <label>Active: <input ref={activeRef}type="checkbox" /></label><br />
        <label>Rate <input ref={rateRef }type="number" /></label><br />
        <label>Count <input ref={countRef }type="number" /></label><br />
        <button onClick={add}>Sisesta</button><br /><br />
        <ToastContainer />
    </div>
  )
}
 
export default AddProduct