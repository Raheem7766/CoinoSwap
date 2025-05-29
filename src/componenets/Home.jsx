import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Home() {
  return (
    <div className="w-full h-[100vh] bg-black">
      <Navbar />
      <Header />
    </div>
  );
}
