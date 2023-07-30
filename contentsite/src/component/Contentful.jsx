import { useState, useEffect } from 'react';
// import { createClient } from 'contentful';
import './Content.css'
// import { response } from 'express';

function Contenful () {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/route_articles')
      .then( response => response.json())
      .then(result => setEntries(result))
      // console.log(response)
      }, []);

    return (
        <>
        
        <h1 id='techno'>
            Better space, better work.
            </h1>

<section>
  <div>
  <div className='container'>

  {entries &&
  entries.map((entries)=> (
    <div className='container'>
    <h3>{entries.articlename}</h3>
    <img className='my-img'
    src={entries.image} alt={entries.image} />
    <p className='description'>{entries.articledescription}</p>
            <p className='price'>{entries.articleprice}</p>
            <button className='button'>Buy</button>
    </div>
  )
  )
  }
  </div>
  </div>

</section>

          
        
            


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