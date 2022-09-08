import Str from "../libs/Str";
import Book from "./Book";

export default function BooksShelf({title, books}) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{Str.of(title).headline()}</h2>
            <div className="bookshelf-books">
                {books.length ? (<ol className="books-grid">
                    {
                        books.map((book, index) => (
                            <Book book={book} key={index}/>
                        ))
                    }
                </ol>) : (<p>No books added yet !</p>)}

            </div>
        </div>
    );
}