

import Contenful from "./component/Contentful";
import  Header  from "./component/Header";
import  MyFooter  from "./component/footer";
import './App.css';
import { useState, useEffect } from "react";

function App() {
 
    const [data, setData] = useState();
    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "http://localhost:3000/route_clients"
          )
        )
.json();
  
        // set state when the data received
        setData(data);
        console.log(data);
      };
  
      dataFetch();
    }, []);

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

