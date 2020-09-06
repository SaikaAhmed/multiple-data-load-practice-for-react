import React from 'react';
import './App.css';
import LikeButton from './Components/LikeButton/LikeButton';
import SingleDataLoad from './Components/SingleDataLoad/SingleDataLoad';
import ArrayData from './Components/ArrayData/ArrayData';
import MultipleFormatDataLoad from './Components/MultipleFormatDataLoad/MultipleFormatDataLoad';


function App() {
 
  return (
    <div>
     <LikeButton></LikeButton>
    <ArrayData></ArrayData>
    <SingleDataLoad></SingleDataLoad>
    <MultipleFormatDataLoad></MultipleFormatDataLoad>
    </div>
  );
}

export default App;
