import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  let query=`*[_type=="books']{
    book_name}`;
    const res=await client.fetch (query);
    console.log(res);
  return (
    <div>book</div>
  );
}
