import React from 'react';
import { Suspense } from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import  from './Singleproduct';/
import '../CSS/Card.css'
import Navbar from './Navbar';
const Singleproduct = React.lazy(() => import("./Singleproduct"));
  const Lazyload=()=> {
  // const navigate=useNavigate();

  const [data, setdata] = useState([ ]);
  const [loading, setLoading] = useState(true);
  const [nexturl, setnexturl] = useState()
  const [prevurl, setprevurl] = useState()

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const Poke=async()=>{
  setLoading(true);
  const res=await axios.get(url);
  setnexturl(res.data.next);
  setprevurl(res.data.previous);
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
      <button className='btn'
       onClick={()=>{
        setUrl(prevurl);
      }}
      >prev</button>
      <button  className='btn'
      onClick={()=>{
        setdata([ ]);
        setUrl(nexturl);
      }}
      >next</button>
     
</div>
</>


  )
}
export default Lazyload;
