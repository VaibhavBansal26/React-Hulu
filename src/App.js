import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import request from './request';
import Result from './Result';

function App() {
  const [selectedOption, setselectedOption] = useState(request.fetchTrending);
  return (
    <div className="app">
      <Header/>
      <Nav setselectedOption={setselectedOption}/>
      <Result selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
