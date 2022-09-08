import BooksShelf from "./BooksShelf";
import {getAll} from "../BooksAPI";
import {useContext, useEffect} from "react";
import BooksContext from "../context/BooksContext";
import {Link} from "react-router-dom";

export default function Shelves() {
    const {setBooks, currentlyReading, wantToRead, read} = useContext(BooksContext);
    useEffect(() => {
        getAll().then(data => setBooks(data));    // eslint-disable-next-line
    }, []);

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <BooksShelf title='currently Reading' books={currentlyReading}/>
                <BooksShelf title='want To Read' books={wantToRead}/>
                <BooksShelf title='read' books={read}/>

            </div>
        </div>
        <div className="open-search">
            <Link to='/search'>Add a book</Link>
        </div>
    </div>);
}