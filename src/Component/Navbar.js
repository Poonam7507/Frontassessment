import React from 'react';
import '../CSS/StyleHome.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate=useNavigate();
    const move=()=>{
        navigate('/lazyload');
    }
    
    const move2=()=>{
        navigate('/');
    }


  return (
    <>
<div className='nav'> 

<div className='ele' onClick={move2}>Home</div>
<div className='ele' onClick={move}>Pokemon_Character</div>
</div>
    </>
  )
}
