import { client } from "@/sanity/lib/client";

interface Book {
    book_name: string;
}

export default async function Home() {
    const query = `*[_type == "books"] {
        book_name
    }`;
    
    const books: Book[] = await client.fetch<Book[]>(query);
    console.log(books);

    return (
        <div>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.book_name}</li> // Rendering the books
                ))}
            </ul>
        </div>
    );
}
