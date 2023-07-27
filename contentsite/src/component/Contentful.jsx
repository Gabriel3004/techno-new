import { useState, useEffect } from 'react';
// import { createClient } from 'contentful';
import './Content.css'
import { response } from 'express';

function Contenful () {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/route_clients')
      .then( response => response.json())
      .then(result => setEntries(result))
      }, []);

    return (
        <>
        
        <h1 id='techno'>
          
            Better space, better work.
            </h1>

        {/* <section>
        <div>
        <div className='container'>
        {entries.map((entry) => {
        return (


          <div className='border'
          key={entry.sys.id}>
            <h3 className='title'>{entry.fields.Title}</h3>
            <img
                className='my-img'
              src={entry.fields.image.fields.file.url}
              alt={entry.fields.Title}
              width=''
            />
            <p className='description'>{entry.fields.description}</p>
            <p className='price'>{entry.fields.money}</p>
            <button className='button'>Buy</button>
          </div>

        );
      })}



      </div>
        </div>
        
      </section> */}



        </>
    );
    
}

export default Contenful;