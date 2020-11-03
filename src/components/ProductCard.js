import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ id, name, url, price, tags }) {
  return (
    <div className="productCard">
      <div className="imgContainer">
        <Link to={`/product/${id}`}>
          <img src={url} alt={name}></img>
        </Link>
      </div>
      <div className="textContainer">
        <div className="textRow">
          <strong>{name}</strong>
        </div>
        <div className="tagContainer">
          {tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="textRow">
          <div>€ {price.toFixed(2)}</div>
          <div>
            Add to card <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

{
    id: 1,
    name: "happy-birthday-cars",
    url:
      "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-15-om-11.37.08-723x1024.png",
    price: 1.5,
    tags: ["birthday", "all-ages"],
  },

      <Link to={`/post/${id}`}>
        <p style={{ marginBottom: 3 }}>
          <strong>{title}</strong>
        </p>
      </Link>
*/
