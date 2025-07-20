import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Courses() {
  return (
    <>
      <Navbar />
      <br/><br/><br/><br/><br/>
      <div className=" min-h-screen">
        <Contact />
      </div>
      <br/>
      <Footer />
    </>
  );
}

export default Courses;