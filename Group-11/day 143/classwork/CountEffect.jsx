// შექმენით useEffect სადაც როცა count მდგომარეობა შეიცვლება დაბეჭდეთ რომ მოხდა მისი შეცვლა

// import { useEffect, useState } from "react";

// const CountEffect = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Count is changed");
//   }, [count]);
//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// };

// export default CountEffect;

// გამოიყენეთ useEffect, იმისათვის რომ როცა ნებისმიერი მდგომარეობა შეიცვლება გაეშვას ფუნქციუა რომელიც კონოლში დაბეჭდავს re-render_ს

// import { useEffect, useState } from "react";

// const CountEffect = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("John");
//   useEffect(() => {
//     console.log("re-render");
//   });
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//       <button onClick={() => setName(name + "1")}>ChangeName</button>
//     </div>
//   );
// };

// export default CountEffect;
