import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Favorite() {
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

      const firstArticle = articleData.result?.[0]

      const firstTitle = firstArticle?.title;
      const firstTotalFav = firstArticle?.total_fav;
      const firstFavBlogId = firstArticle?.id;

      const secondArticle = articleData.result?.[1]

      const secondTitle = secondArticle?.title;
      const secondTotalFav = secondArticle?.total_fav;
      const secondFavBlogId = secondArticle?.id;
    
  return (
    <>
    <div className="favoriteArticle">
        <span>WriteLn's Favorite</span>
        <Link to="/blog/favorite" className="seeAllLink">See All</Link>
    </div>
    <div className="favoriteArticleStrip">
        <Link to={`/blog/${firstFavBlogId}`}>
            <div className="favoriteArticleCard">
                <div className="titleAreaFavArticle">{firstTitle}</div>
                <div className="totalFav"><span className="favs">{firstTotalFav} favorites</span></div>
            </div>
        </Link>
    </div>
    <div className="favoriteArticleStrip">
        <Link to={`/blog/${secondFavBlogId}`}>
            <div className="favoriteArticleCard">
                <div className="titleAreaFavArticle">{secondTitle}</div>
                <div className="totalFav"><span className="favs">{secondTotalFav} favorites</span></div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default Favorite