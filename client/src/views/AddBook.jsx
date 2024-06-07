import Nav from "../components/Nav"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BookDetails from "./BookDetails"

const AddBook = (props) => {

    const {submitFunction} = props
    const navigate = useNavigate()
    const [bookData, setBookData] = useState({
        title: ``,
        author: ``,
        pages: ``,
        isAvailable: ''
    })

    const [bookErrors, setBookErrors] = useState({})

    const updateBookData = (e) => {
        const {name, value} = e.target
        setBookData(prev => ({...prev, [name]: value}))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        submitFunction(bookData)
            .then(() => navigate('/'))
            .catch(error => setBookErrors(error))
        setBookData({
            title: '',
            author: '',
            pages: '',
            isAvailable: ''
        })
    }
    return(<>
        <Nav title={`Add a Book`}/>
        <form onSubmit={submitHandler} className="book-form">
            <label>
                Title: 
                <input 
                    type="text" 
                    name="title"
                    onInput={updateBookData}
                    value={bookData.title} />
            </label>
            <label>
                Author:  
                <input 
                    type="text" 
                    name="author"
                    onInput={updateBookData}
                    value={bookData.author}/>
            </label>
            <label>
                Pages: 
                <input 
                    type="number"
                    name="pages"
                    onInput={updateBookData}
                    value={bookData.pages}/>
            </label>
            <div>
                <p>Is it Available?</p>
                <label>
                    Yes
                    <input 
                        type="radio" 
                        name="isAvailable" 
                        onChange={updateBookData}
                        value={true}/>
                </label>
                <label>
                    No 
                    <input 
                        type="radio" 
                        name="isAvailable"
                        onChange={updateBookData}
                        value={false} />
                </label>
            </div>
            <input type="submit" value="Add Book" />
        </form>
    </>)
}

export default AddBook