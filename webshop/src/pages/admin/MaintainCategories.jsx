import React, { useEffect, useRef, useState } from 'react'

function MaintainCategories() {
  const categoryRef = useRef();
  
  const [categories, setCategories] = useState([]);
  const categoryUrl = "https://webshop-10-24-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  useEffect(() => {
    fetch(categoryUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));  // || [] --> kui on "null", siis võta parempoolne 
  }, []);

  function removeCategory(index) {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(categoryUrl, {method: "PUT", body: JSON.stringify(categories)});
  }

  function addCategory() {
    categories.push(categoryRef.current.value);
    setCategories(categories.slice());
    fetch(categoryUrl, {method: "PUT", body: JSON.stringify(categories)});
  }

  return (
    <div>
      <label>Uus kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Lisa</button><br />
      {categories.map((category, index) => 
        <div key={category}>
          {category}
          <button onClick={() => removeCategory(index)}>x</button>
        </div>)}
    </div>
  )
}

// onClick={() => removeCategory(index)}
// onClick={addCategory}
// <div>{arvutaKokku()}</div>

export default MaintainCategories