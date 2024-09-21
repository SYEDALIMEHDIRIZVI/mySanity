'use client'
import { client } from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from 'react';

const Book = () => {
    const [books, setBooks] = useState([]); // Capitalized setter function

    useEffect(() => {
        const query = `*[_type == "books"]{
            book_name
        }`;
        
        const getBook = async () => {
            const res = await client.fetch(query);
            setBooks(res); // Setting the fetched books
        };

        getBook();
    }, []);

    console.log(books); // Logging fetched books

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.book_name}</li> // Rendering the books
                ))}
            </ul>
        </div>
    );
}

export default Book;
