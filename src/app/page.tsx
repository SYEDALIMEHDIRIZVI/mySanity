import { client } from "@/sanity/lib/client";
// import Image from "next/image";

const Home = async () => {
  const query = `*[_type == "books"] {
    book_name
  }`;
  
  const res = await client.fetch(query);
  console.log(res); // This line is okay if you're using the results somewhere.

  return (
    <div>{res.map(book => <div key={book.book_name}>{book.book_name}</div>)}</div>
  );
};

export default Home;
