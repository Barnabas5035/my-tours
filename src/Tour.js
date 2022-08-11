import React, { useState } from "react";

const Tour = ({ tours, removeFunction }) => {
  const { id, name, image, info, price } = tours;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "  showless" : "readmore"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeFunction(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
