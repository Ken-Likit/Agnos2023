import React, { Component, useState } from 'react';
import './App.css';
import Question1 from './q1v2';
import Question2 from './q2v2';

//Setup to allow for one question per page changed by a button.
const Component1 = () => (
  <div>
    <Question1 />
  </div>
);

const Component2 = () => (
  <div>
    <Question2 />
  </div>
);

//Main function that combines both functions
export default function App() {
  const [showComponent1, setShowComponent1] = useState(true);

  const toggleComponent = () => {
    setShowComponent1(!showComponent1);
  }; 

  return (
    <div>
      <button onClick={toggleComponent}>Change Question</button>
      {showComponent1 ? <Component1 /> : <Component2 />}   
    </div>
  );
      
}
