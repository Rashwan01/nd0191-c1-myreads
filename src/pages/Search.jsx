import { useState} from "react";
import {search} from "../BooksAPI";
import Book from "../components/Book";
import {Link} from "react-router-dom";

export default function Search() {
    const [result, setResult] = useState([]);
    const goSearch = (term) => {
        search(term).then(res => {
            if (res.hasOwnProperty('error')) {
                return setResult([]);
            }
            return setResult(res);
        }).catch((error) => {

        })
    }
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        onChange={(e) => {
                            goSearch(e.target.value)
                        }}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {result.map((book, index) => (
                        <Book book={book} key={index}/>
                    ))}

                </ol>
            </div>
        </div>
    );
}