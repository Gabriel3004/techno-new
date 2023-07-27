import { useState, useEffect } from 'react';
// import { createClient } from 'contentful';
import './Content.css'
impo


const client = createClient({
    space: 't77jo4vbj5hx',
    accessToken: 'mvXKzLLkWaHePYxesESQ0slhkub8f51WYoTW8e24bQ4',
  });


function Contenful () {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        client
          .getEntries()
          .then((response) =>
            //   console.log(response)
            setEntries(response.items)
          )
          .catch(console.error);
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