// import { useEffect, useState } from "react";

// const WindowSizeChange = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   const divStyle = {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "5px",
//   };

//   const handleResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   console.log("re-render!");

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       console.log("clear termina;");
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div style={divStyle}>
//       <p>Window is {width > height ? "horizontal" : "vertical"}</p>
//     </div>
//   );
// };

// export default WindowSizeChange;
