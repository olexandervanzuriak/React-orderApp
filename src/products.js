import pizza1 from "./assets/pizza1.jpeg"
import pizza2 from "./assets/pizza2.jpeg"
import pizza3 from "./assets/pizza3.jpeg"
import pizza4 from "./assets/pizza4.jpeg"
import pizza5 from "./assets/pizza5.jpeg"
import pizza6 from "./assets/pizza6.jpeg"
import sushi1 from "./assets/sushi1.jpeg"
import axios from "axios"

const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/food_data");
    return response.data;
  }


const dataProducts = getData();

console.log(dataProducts.Promise);

export const PRODUCTS = [
    {
        id: 1,
        productName: dataProducts.name,
        price: 10,
        productImage: pizza1
    },

    {
        id: 2,
        productName: "Pizza Four Cheese",
        price: 12,
        productImage: pizza2 
    },
    
    {
        id: 3,
        productName: "Pizza Prosciutto",
        price: 15,
        productImage: pizza3
    },

    {
        id: 4,
        productName: "Pizza Capricciosa",
        price: 18,
        productImage: pizza4
    },

    {
        id: 5,
        productName: "Hawaiian Pizza",
        price: 8,
        productImage: pizza5
    },

    {
        id: 6,
        productName: "European Pizza",
        price: 10,
        productImage: pizza6
    },

    {
        id: 7,
        productName: "Sushi Green Dragon",
        price: 12,
        productImage: sushi1
    }
];