import React from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function BlogPage() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState([])
  const [likeValue, setLikeValue] = useState("Like")

  useEffect(() => {
    Axios.get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/${id}`)
    .then((response) => {
      setArticleData(response.data);
    })
    .catch((err) => console.log(err));
  }, [id])

  const getBlogData = articleData?.[0]
  const blogTitle = getBlogData?.title
  const blogImage = getBlogData?.imageURL
  const blogWriter = getBlogData?.User.username
  const blogDate = getBlogData?.createdAt
  const blogContent = getBlogData?.content
  const blogCategory = getBlogData?.Category.name

  const handleLike = () => {
    const token = localStorage.getItem('token')

    if (token) {
      setLikeValue("Liked")
      Axios.post("https://minpro-blog.purwadhikabootcamp.com/api/blog/like" , {BlogId: id},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } else {
      window.alert("You must log in to like this blog")
    }
    
  }

  return (
    <>
    <div className="blogImageContainer"><img className="blogImage" src={`https://minpro-blog.purwadhikabootcamp.com/${blogImage}`} alt="" /></div>
    <div className="blogTitle"><span>{blogTitle}</span></div>
    <div className="writerSection">
      <div className="writerPicBlogPage"></div>
      <div className="blogWriter"><span>{blogWriter}</span></div>
    </div>
    <div className="blogCategory">{blogCategory}</div>
    <div className="blogDateAndActions">
      <div className="blogDate">{dayjs(blogDate).format("DD/MM/YYYY")}</div>
      <div className="blogActions">
        <button className="likeBtn" onClick={handleLike}>{likeValue}</button>
      </div>
    </div>
    <div className="blogContent">{blogContent}</div>
    </>
  
  )
}

export default BlogPage