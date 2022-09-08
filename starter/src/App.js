import "./App.css";
import React, {useMemo, useState} from "react";
import BooksContext from "./context/BooksContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
    const [books, setBooks] = useState([])
    const currentlyReading = useMemo(() => books.filter((book) => book.shelf === 'currentlyReading'), [books])
    const wantToRead = useMemo(() => books.filter((book) => book.shelf === 'wantToRead'), [books])
    const read = useMemo(() => books.filter((book) => book.shelf === 'read'), [books])
    return (
        <BooksContext.Provider value={{books, setBooks, currentlyReading, wantToRead, read}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/search" element={<Search/>}></Route>
                </Routes>
            </BrowserRouter>
        </BooksContext.Provider>
    );
}

export default App;
