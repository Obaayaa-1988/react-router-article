
import React from 'react';
import { useState } from 'react';
import './home.css';

export default function Forms() {

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("")


  return (
    <>
    <div className='form-inner'>
    <div className='outer-form'>
             <form>
               <h4>SEND YOUR COMMENTS</h4>
               <i class="fa fa-user"></i>
             <input type="text" className='input1' placeholder="Username" 
               value={username} onChange={(e) => setUsername(e.target.value)}
             
             />
             {/* <input type="email" className='input2' placeholder="Email"/>
             <input type="password" className='input2' placeholder="Password"/> */}
              <textarea placeholder='write your message' rows={5} cols={35}
               value={comment} onChange={(e) => setComment(e.target.value)}
              
              
              
              ></textarea> 
             <button type='submit'>Submit</button>
            

             
             </form>

            
           </div>
           <div>
               <h2>Read Comments</h2>
           <h1  className='part'>{username}</h1>
           <p  className='part2'>{comment}</p>

           </div>

          

    </div>


    </>
  )
}




