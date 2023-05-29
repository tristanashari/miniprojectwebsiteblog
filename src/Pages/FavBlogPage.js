import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';
import '../Components/styles.css'

function FavBlogPage() {
    const [articleData, setArticleData] = useState([]);
    useEffect(() => {
        Axios.get(
          `https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav`
        )
          .then((response) => {
            setArticleData(response.data);
          })
          .catch((err) => console.log(err));
      }, []);

  return (
    <>
    <div className="favBlogPageTitle"><span>WriteLn's Favorite</span></div>
    <div className="favBlogDataContainer">
    {articleData.result?.map((article) => (
        <div className="favoriteArticleStrip">
        <Link to={`/blog/${article.id}`}>
            <div className="favoriteArticleCard">
                <div className="titleAreaFavArticle">{article.title}</div>
                <div className="totalFav"><span className="favs">{article.total_fav} favorites</span></div>
            </div>
        </Link>
    </div>
    ))}
    </div>
    </>
  )
}

export default FavBlogPage