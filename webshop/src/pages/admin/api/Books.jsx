import React, { useEffect, useRef, useState } from 'react'
import ParcelMachines from '../../../components/cart/ParcelMachines';

function Books() {
  // https://api.itbook.store/1.0/search/react
  const [books, setBooks] = useState([]);
  const searchRef = useRef();
  const [searchTerm, setSearchTerm] = useState("react");

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/" + searchTerm)
      .then(res => res.json())
      .then(json => setBooks(json.books))
  }, [searchTerm]);

  // kui on {} tagastus kui API lehe avan, siis tuleb jõuda
  // [] kohani. uurin, kus see on: siinses näites "books" taga on []
  function changeSearchTerm() {
    if (searchRef.current.value.length < 3) {
      return;
    }
    setSearchTerm(searchRef.current.value);
  }

  return (
    <div>
      <ParcelMachines />
      <input onChange={changeSearchTerm} ref={searchRef} type="text" />
       <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
          <tr key={book.isbn13}>
            <td><img style={{width:"100px"}} src={book.image} alt="" /></td>
            <td>{book.title}</td>
            <td>Price: {book.price}€</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Books