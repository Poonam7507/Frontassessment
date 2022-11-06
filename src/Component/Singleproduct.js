import React from 'react';
import '../CSS/Card.css'

export default function Singleproduct({data,loading}) {
  console.log(data);
  return (
    <div  className='cards'>
    
    {
      loading?<h3>Loading ...</h3>:
      data.map((item)=>{
        return(
          <>
            
           
           
<div className='card' >

            <img src={item.sprites.front_default}/>
          
            <h2> {item.species.name}</h2>
<h3>Weight:{item.weight}</h3>
<h3>Height:{item.height}</h3>
</div>
          

          </>
        )
      })
    }
  
   
    </div>
  )
}
