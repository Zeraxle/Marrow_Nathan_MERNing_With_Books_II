import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import BookDetails from './views/BookDetails'
import AddBook from './views/AddBook'
import AllBooks from './views/AllBooks'
import { createBook } from './services/book.service'



function App() {

    const [books, setBooks] = useState([])

  return (
    <>
      
      <Routes>
        <Route path='/' element={<AllBooks books={books} setBooks={setBooks}/>}/>
        <Route path='/book/create' element={<AddBook submitFunction={createBook}/>}/>
        <Route path='/book/:id/details' element={<BookDetails/>}/>
      </Routes>
    </>
  )
}

export default App
