import { useState, useEffect } from 'react';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log("resize!"),
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    })

    return () => {
      console.log("clean terminal"),
      window.removeEventListener('resize', () => {
        setWidth(0);
        setHeight(0);
      })
    }
  }, [])

  return (
    <div className="div-1">
      <p>{width}</p>
      <p>{height}</p>
    </div>
  );
}

export default App;