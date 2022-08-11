import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeFunction }) => {
  return (
    <section>
      <div className="title">
        <h2> our tour</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tours) => {
        return (
          <div>
            <Tour
              key={tours.id}
              tours={tours}
              removeFunction={removeFunction}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Tours;
