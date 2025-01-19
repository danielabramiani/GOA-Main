// შექმენით კომპონენტი რომელსაც დაარქმევთ ProductList ამ კომპონენტში უნდა
// გამოიყენოთ useEffect რომ გააგზავნო მოთხოვნა API _ზე და როგორც კი მოთხვნა შესრულდება
// (ანუ როცა მონაცემები დაგიბრუნდებათ) დაარენდერეთ სიის სახით

// import { useEffect, useState } from "react";

// const ProductsList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <ul>
//       {products.map((curValue, index) => {
//         return <li key={curValue.id}>{curValue.title}</li>;
//       })}
//     </ul>
//   );
// };

// export default ProductsList;