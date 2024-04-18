import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/novel')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <div style={{backgroundColor:'lightcoral',color:'black',height:'30px',padding:'40px',  justifyContent:'space-between',display:'flex'}}>
        <h1 style={{alignContent:'center'}}>BOOK BUZZ!</h1>
      <div style={{display:'flex',justifyContent:'flex-end',gap:'50px',width:'100px',height:'40px'}}>
           <button style={{borderColor:'lightcoral',borderRadius:'30px',fontSize:'20px'}}> Login </button>
           <button style={{borderColor:'lightcoral', borderRadius:'30px',fontSize:'20px'}}> Books </button>
           <button style={{borderColor:'lightcoral', borderRadius:'30px',fontSize:'20px'}}>Magazine</button>
           <button style={{borderColor:'lightcoral', borderRadius:'30px',fontSize:'20px'}}>writers </button>
           

           </div>

      </div>
      

      <center>
    <div style={{backgroundImage:`url(/library5.jpg)`,backgroundSize:'cover',height:'700px',width:'700',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <div style={{alignItems:'center',display:'flex',justifyContent:"center",color:'beige',flexDirection:'row',width:'500px',height:'200px',flexDirection:"column"}}>
      <h1 style={{fontSize:'60px',color:'coral'}}>WELCOME</h1>
      <div style={{fontSize:'30px', color:'black'}}>BooK BuZz:Best Book Blog</div>
    </div>
    </div>
      </center>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',padding:'30px'}}>
    <a href='#' onClick={logout}>
        <img src='novel.jpg' style={{borderRadius:'20px', height:'200px',width:'300px'}}></img>
        <h4 style={{color:'red'}}>Novel</h4>
      </a>
      <a href='#'>
        
        <img src='poetry.jpg' style={{borderRadius:'20px', height:'200px',width:'300px'}}></img>
        <h4 style={{color:'red'}}>Poetry</h4>
      </a>
      <a href='#' >
        
        <img src='drama.jpg' style={{borderRadius:'20px',height:'200px',width:'300px'}}></img>
        <h4 style={{color:'red'}}>Drama</h4>
      </a>
      
      <a href='#'>
        
        <img src='biography.jpg' style={{borderRadius:'20px', height:'200px',width:'300px'}}></img>
        <h4 style={{color:'red'}}>Biography</h4>
      </a>
      
      

    </div>
    </div>

  );
};

export default Home;
