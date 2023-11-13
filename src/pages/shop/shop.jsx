import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {

  return (
    <div>
      <div className="shop">
        <div className="shopTitle">
          <h1>Olexander's Pizza</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
