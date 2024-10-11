import React from 'react';
// import './App.css'

export  function Cards({allproducts}) {
  return (
    <div className="dataimages">
      {
             allproducts.map((product =>{
              return(
                <div className='img'>
                {/* <img src="https://images.pexels.com/photos/3810915/pexels-photo-3810915.jpeg?auto=compress&cs=tinysrgb&w=800" alt="shiva" />  */}
                <div>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>
                </div>
                </div>
                
              )
             }))
      }
      
      
    </div>
  )
}
