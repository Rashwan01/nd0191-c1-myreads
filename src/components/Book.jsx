import {update} from "../BooksAPI";
import {useContext} from "react";
import BooksContext from "../context/BooksContext";

export default function Book({book}) {
    const {books, setBooks} = useContext(BooksContext);
    const updateBookShelf = (book, shelf) => {
        update(book, shelf).then((res) => {
            const updatedData = books?.map(_book => {
                if (_book.id === book.id) {
                    _book.shelf = shelf;
                }
                return _book;
            });
            setBooks(updatedData);
        });
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book?.imageLinks?.smallThumbnail??''})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf??'none'} onChange={(e) => {
                            updateBookShelf(book, e.target.value)
                        }}>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading" disabled={book.shelf === 'currentlyReading'}
                            >Currently Reading
                            </option>
                            <option disabled={book.shelf === 'wantToRead'}
                                    value="wantToRead">Want to Read
                            </option>
                            <option disabled={book.shelf === 'read'}
                                    value="read">Read
                            </option>
                            <option value={book.shelf === 'none'}
                                    defaultValue="none">None
                            </option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book?.authors?.length && <div className="book-authors">{book?.authors[0]}</div>}

            </div>
        </li>
    );
}