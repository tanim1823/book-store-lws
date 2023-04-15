import React from "react";
import Filter from "./Filter";
import Book from "./Book";

const BookSection = () => {
  return (
    <div className="order-2 xl:-order-1">
      <Filter />
      <Book />
    </div>
  );
};

export default BookSection;
