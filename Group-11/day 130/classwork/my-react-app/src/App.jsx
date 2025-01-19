import React, { useState } from 'react';

// 1) შექმენით კომპონენტი რომელიც არგუმენტად მიიღებს სახელების სიას, და თვქენ ul თეგში უნდა დაარენდეროთ თითოეული მნიშვნელობისთი ერთი li თეგი ახსენით კომენტარებით რა არის პროპს
const NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

// 2) მშობელი კომპონენტიდან გადაეცით მონაცემი შვილ კომპონენტს მაგალითად თქვენი სახელი
const ChildComponent = ({ sendDataToParent }) => {
  const handleButtonClick = () => {
    sendDataToParent('hola!');
  };

  return <button onClick={handleButtonClick}>submiy</button>;
};

// main
const App = () => {
  const [messageFromChild, setMessageFromChild] = useState('');
  const names = ['ninnuca', 'daniel', 'mariami'];

  // 3) შვილი კომპონენტიდან გადაეცით მშობელ კომპონენტს მონაცემი
  const handleChildData = (data) => {
    setMessageFromChild(data);
  };

  return (
    <div>
      <h1>names</h1>
      <NameList names={names} />

      <h2>child component:</h2>
      <p>{messageFromChild}</p>

      <ChildComponent sendDataToParent={handleChildData} />
    </div>
  );
};

export default App;
