import React from 'react';

import "react-datepicker/dist/react-datepicker.css";

import { BrowserRouter } from 'react-router-dom';


import { Col, Container, Row } from 'react-bootstrap';

import Home from './page/home/index';

function App() {

  return (
    <div className="App">
      <Home />
    </div>
  );

}

export default App;
