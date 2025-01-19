// import { useState } from "react";

// const App = () => {
//   const [items, setItems] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const item = e.target.item.value;
//     e.target.reset();
//     setItems([...items, item]);
//   };

//   const handleDelete = (i) => {
//     const filteredItems = items.filter((_, index) => index != i);
//     setItems([...filteredItems]);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="item" placeholder="Enter todo item" required />
//         <button>Submit</button>
//       </form>
//       <ul>
//         {items.map((curValue, index) => {
//           return (
//             <li key={`item-${index}`} onClick={() => handleDelete(index)}>
//               {curValue}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default App;