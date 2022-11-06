import React from 'react';
import { Suspense } from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

import '../CSS/Card.css'
import Navbar from './Navbar';
const Singleproduct = React.lazy(() => import("./Singleproduct"));
  const Lazyload=()=> {

  const [data, setdata] = useState([ ]);
  const [loading, setLoading] = useState(true);

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const Poke=async()=>{
  setLoading(true);
  const res=await axios.get(url);
  
  get(res.data.results);
  setLoading(false);
  }
 
 useEffect(() => {
  Poke();
 
   
 }, [url])
 
  const get=(response)=>{
  response.map(async(item)=>{
    const result= await axios.get(item.url);
    console.log(result);
    console.log(data);
setdata(state=>{
    state=[...state,result.data]
    return state;
})
    
  })
  }
  
  
  
  return (
< >
<div className='product'>

<Navbar/>
<Suspense fallback={<div>Loading</div>}>
<Singleproduct data={data} loading={loading}/>
			</Suspense>
</div>
</>


  )
}
export default Lazyload;
