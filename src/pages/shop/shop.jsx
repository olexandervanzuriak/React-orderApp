import { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";
import axios from "axios";

export const Shop = () => {
  const [foodData, setFoodData] = useState([]);
  const url = "http://localhost:3000/api/v1/food_data";

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/food_data");
    return response.data;
  } 

  useEffect(() => {
      let mounted = true;
      getData().then((item) => {
        if(mounted) {
          setFoodData(item)
        }
      })
      return () => (mounted = false);
  }, [])
  
  return (
    <div>
      <div className="shop">
        <div className="shopTitle">
          <h1>Olexander's Pizza</h1>
        </div>
        <div className="products">
          {foodData.map((product) => (
            <Product data={product} img={PRODUCTS[product.id - 1].productImage} />
          ))}
        </div>
      </div>
    </div>
  );
};
