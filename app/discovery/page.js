"use client";
import Card from "../components/card";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks } from "../redux/stateManager/article/articleSlice";

export default function discovery() {
  const dispatch = useDispatch();
  const [authorName, setAuthorName] = useState("");
  const { books, loading, error } = useSelector((state) => state.books);

  const handleSearch = () => {
    dispatch(searchBooks(authorName));
  };
  console.log(books);
  return (
    <>
      {/* <Header /> */}
      <Card />
      <div className="mt-32 flex flex-row justify-center">
        <div>
          <input
            type="text"
            placeholder="Search Book with Keyword, AuthorName and by Title"
            className="h-10  w-[220px] appearance-none items-center rounded-xl border border-border-base bg-neutral-700 text-white px-5 text-sm outline-none outline transition duration-300 ease-in-out  focus:border-none focus:border-accent focus:outline-none  focus:ring-0  sm:h-10 sm:w-[380px] "
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSearch}
            className=" bg-orange-400  px-1 py-2  text-white hover:bg-orange-400 focus:border-orange-400 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 px-20 py-10">
        {books.map((book) => (
          <li key={book.isbn13}>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={book.image} alt="" />
              </a>
              <div class="p-5">
                <a href={book.url}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {book.price}
                </p>
                <a
                  href={book.url}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-300 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
