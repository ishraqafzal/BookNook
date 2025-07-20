import React,  { useEffect, useState }  from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "./Cards";
// import list from '../list.json';
function Course() {
    // console.log(list);
    const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
    return (
        <>
          <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
              {/* <h1 className="text-2xl  md:text-4xl">
              {" "}
                <span className="text-pink-500">Your Literary Playground Awaits</span>
              </h1> */}
              <p className="mt-12">
              Discover a world where stories thrive—browse free reads or unlock premium treasures. <br/>
              Every book is a new journey, and this is where yours begins.
              </p>
              <Link to="/">
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Back
                </button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {book.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          </div>
        </>
      );
    }
    
    export default Course;