import React from 'react'
import './styles.css'
import { Carousel } from 'flowbite-react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

function CarouselSection() {
  const [articleData, setArticleData] = useState([])

  useEffect(() => {
    Axios.get(
      `https://minpro-blog.purwadhikabootcamp.com/api/blog/?id_cat=&sort=DESC&page=1&search=`
    )
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="carousel"><span>Latest Articles</span></div>
    <div className="carouselStrip">
      <Carousel>
      {articleData.result?.map((article) => ( 
        <div className="carouselContainer">
          <Link to={`/blog/${article.id}`}>
          <div className="carouselImageContainer"><img className="carouselImage" src={`https://minpro-blog.purwadhikabootcamp.com/${article.imageURL}`} alt="" /></div>
          <div className="carouselTitle"><span>{article.title}</span></div>
          <div className="carouselWriterAndDate">
            <div className="carouselWriter"><span>{article.User.username}</span></div>
            <div className="carouselDate"><span>{dayjs(article.createdAt).format("DD/MM/YYYY")}</span></div>
          </div>
          </Link>
        </div>
      ))}
      </Carousel>
    </div>
    </>
  )
}

export default CarouselSection