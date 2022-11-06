import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../bg1.jpg'
import '../CSS/StyleHome.css'
import axios from 'axios';
import Navbar from './Navbar';

const Home=()=> {
    const [show, setShow] = useState(false);
    const [msg, setmsg] = useState("");
    const [search, setSearch] = useState("");
    const [pokemon, setpokemon] = useState("")
    const input=(e)=>{
        const data=e.target.value;
        setSearch(data);
      //   console.log(data);
    }
    
const hide=()=>{
      setShow(false);
}
const searchdata=()=>{
      // try{

            axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`).then((response)=>{
                  setShow(!show);
                  //  console.log(response);
                   setpokemon(response);
                   setSearch("")
            })
            .catch((error) => { 
                  if (error.response) { 
                    console.log("Data :" , error.response.data);
                    console.log("Status :" + error.response.status);
                    setmsg("error");
                    setShow(false);
                  } else if (error.request) { 
                    console.log(error.request);
                    setmsg("error");
                    setShow(false);


                  } else {
                    console.log('Error', error.message);
                    setmsg("error");
                    setShow(false);


                  }
                });
     
}
   

  return (
    <>
    <Navbar/>
      <div className='search_box' >
    
      <div className='search_tab' >
      <div>

           <input type="search"  placeholder="Search "  
           value={search}
      
     onChange={input} />
      </div>
           <div className='search'>
                <button  className='btn' disabled={!search} onClick={searchdata}>
                  Search
                </button>
                
           </div>
      </div>
{show? 
     ( <div  className=' homecard'>

<img src={pokemon.data.sprites.front_default}/>
<h2> Name:{pokemon.data.species.name}</h2>
<h3>Weight:{pokemon.data.weight}</h3>
<h3>Height:{pokemon.data.height}</h3>
<h3>hp:{pokemon.data.stats[0].base_stat}</h3>
<h3>attack:{pokemon.data.stats[1].base_stat}</h3>
<h3>defence:{pokemon.data.stats[2].base_stat}</h3>
<h3>type:{pokemon.data.types[0].type.name}</h3>
     
      </div>)
      :(
         <div>
         <h2>Data Not Found</h2>
         </div>
      )
}

      </div>
    </>
  )
}

export default Home;
