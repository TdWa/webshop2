import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import CategoriesAndTags from "../components/CategoriesAndTags";
import "./ProductPage.scss";

export default function ProductPage() {
  const { id } = useParams();
  const product = useSelector(selectProductById(Number(id)));
  const { name, url, price, tags, categories } = product;

  return (
    <div className="page">
      <div className="productPage">
        <div className="imgContainer">
          <img src={url} alt={name}></img>
        </div>
        <div className="textContainer">
          <div className="row">
            <div>
              <h2>{name}</h2>
            </div>
            <div>
              <CategoriesAndTags categories={categories} tags={tags} />
            </div>
          </div>
          <div className="row">
            <div>
              <strong>Price:</strong> € {price.toFixed(2)}
            </div>
            <div className="cart">
              Add to cart <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
