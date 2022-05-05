import React from 'react'
import './article.css';
import { NavLink } from 'react-router-dom';
import { getArticle } from '../newdata';
import { getArticles } from '../newdata';
import { useParams } from 'react-router-dom'

export default function Article() {

  let params = useParams();
  let article = getArticle(parseInt(params.articleId, 10))
  let articles = getArticles();

  let filteredArticle = [];

  const articleFiltered = () => {
    filteredArticle = articles.filter((item) => item.number !== article.number)
    console.log(filteredArticle)

  }

  articleFiltered()


  return (
    <div>
      <div className='article-card'>
        <img src={article.image} alt="pic" />
        <h2>Dog Name: {article.name}</h2>
        <p>{article.details}</p>
      </div>

      <hr />

      <section className='grid-cards'>
        {filteredArticle.map((list) => (
          <div>
          
            <NavLink to={`/articles/${list.number}`} key={list.number}>
            <div className='grid1-cards'>
              <div className='my-image'>
                <img src={list.image} alt="pic" />

              </div>
              <div className='grid-text2'>
                <h2> {list.name}</h2>
                {/* <p> {list.number}</p> */}
                <p> {list.description}</p>
               </div>
              
              
             </div>
            </NavLink>



          </div>
        ))}

      </section>

    </div>
  )
}
