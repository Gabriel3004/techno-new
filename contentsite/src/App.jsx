

import Contenful from "./component/Contentful";
import  Header  from "./component/Header";
import  MyFooter  from "./component/footer";
import './App.css';
import { useState, useEffect } from "react";

function App() {

  return (
    <>
    <Header />
    <div className="test"><Contenful />
    </div>
    <MyFooter />
    </>
  )
}

export default App

