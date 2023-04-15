import React from "react";
import Form from "./Form";
import BookSection from "./book/BookSection";

const Body = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <BookSection />
        <Form />
      </div>
    </main>
  );
};

export default Body;
