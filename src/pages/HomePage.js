import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  selectProductsByCategory,
  selectProductCategories,
} from "../store/products/selectors";
import { selectCartByUserId } from "../store/users/selectors";
import "./HomePage.scss";

export default function HomePage() {
  const [categoryFilter, setCategoryFilter] = useState("all categories");
  const [sortMethod, setSortMethod] = useState("popularity (desc)");
  const products = useSelector(selectProductsByCategory(categoryFilter));
  const categories = useSelector(selectProductCategories);
  const cart = useSelector(selectCartByUserId(1));

  products.sort((a, b) => {
    switch (sortMethod) {
      case "popularity (desc)":
        return b.popularity - a.popularity;
      case "popularity (asc)":
        return a.popularity - b.popularity;
      case "price (desc)":
        return b.price - a.price;
      case "price (asc)":
        return a.price - b.price;
      case "currently in cart": {
        const foundA = cart.find((product) => product.productId === a.id);
        const amountA = foundA ? foundA.amount : 0;
        const foundB = cart.find((product) => product.productId === b.id);
        const amountB = foundB ? foundB.amount : 0;
        if (amountA > amountB) {
          return -1;
        } else if (amountA < amountB) {
          return 1;
        } else {
          return 0;
        }
      }
      default:
        return 0;
    }
  });

  return (
    <div className="page">
      <br></br>
      <div id="filterContainer">
        <label htmlFor="filterType">Filter by category: </label>
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          name="filter"
          id="filterType"
        >
          <option>all categories</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <br></br>
      <div id="sortContainer">
        <label htmlFor="sortType">Sort Postcards: </label>
        <select
          onChange={(e) => setSortMethod(e.target.value)}
          name="sort"
          id="sortType"
        >
          <option value="popularity (desc)">popularity (desc)</option>
          <option value="popularity (asc)">popularity (asc)</option>
          <option value="price (desc)">price (desc)</option>
          <option value="price (asc)">price (asc)</option>
          <option value="currently in cart">currently in cart</option>
        </select>
      </div>
      <br></br>
      <div id="productContainer">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
