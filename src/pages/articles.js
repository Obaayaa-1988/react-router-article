import React from 'react';
import './article.css';
import { NavLink, Outlet } from 'react-router-dom';
import { getArticles } from '../newdata';

export default function Articles() {
  let articles = getArticles()
  return (
    <div>
      
      <div className='article'>

        {articles.map((article) => (
          <NavLink to={`/Articles/${article.number}`} key={article.number}>
            <div className='card'>
            <div className='my-image'>
              <img src={article.image} alt="pic"/>
            </div>

            
            <div className='cards'>
         <h2> {article.name}</h2>
         <h3> {article.description}</h3>
      
         
         </div>
         </div>
          
          </NavLink>
          

        ))

        }

      </div>
      <Outlet />
      



    </div>
  )
}
