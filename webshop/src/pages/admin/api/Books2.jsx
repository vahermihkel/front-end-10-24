import React, { useEffect, useState } from 'react'

function Books2() {
  // https://www.freetestapi.com/api/v1/books

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.freetestapi.com/api/v1/books")
      .then(res => res.json())
      .then(json => setBooks(json))
  }, []);

  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
          <tr key={book.isbn13}>
            <td><img style={{width:"100px"}} src={book.cover_image} alt="" /></td>
            <td>{book.title}</td>
            <td>Year: {book.publication_year} </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Books2