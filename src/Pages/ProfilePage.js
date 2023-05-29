import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function ProfilePage() {
    const [articleData, setArticleData] = useState([])
    const token = localStorage.getItem("token")
    const [likeData, setLikeData] = useState([])

    useEffect(()=> {
        Axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagLike",
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
            setLikeData(response.data);
            console.log(response.data)
          })
          .catch((err) => console.log(err));
      }, []);

    useEffect(() => {
        Axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser",
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
            setArticleData(response.data);
          })
          .catch((err) => console.log(err));
      }, []);
    
    function handleDelete(article) {
        let text = "Are you sure you want to delete this blog?";
        if (window.confirm(text) == true) {
        Axios.patch(`https://minpro-blog.purwadhikabootcamp.com/api/blog/remove/${article}`)
        .then(
            Axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser",
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
            setArticleData(response.data);
            console.log(response)
          })
          .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err))
        } 
    }
  return (
    <>
    <div className="settingsContainer"><Link to="/settings"><button>Settings</button></Link></div>
    <div className="myBlog">My blog</div>
    {articleData.result?.map((article) => (
        <div className="articleStrip">
            <div className="articleCard">
              <div className="writerArea">
                <div className="writerPic"></div>
                <span>{article.User.username}</span>
              </div>
              <div className="dateArea">
                <button className='deleteBtn' onClick={() => {handleDelete(article.id)}}>Delete</button>
              </div>
              <div className="titleArea">
                <span>{article.title}</span>
              </div>
              <div className="previewArea">
                <p>{article.content}</p>
              </div>
              <div className="artCategoryArea">
                <span>{article.Category.name}</span>
              </div>
              <div className="readBtnArea"></div>
              <div className="imageArea">
                <img className="artImage" src={`https://minpro-blog.purwadhikabootcamp.com/${article.imageURL}`} alt="" />
              </div>
            </div>
        </div>
        ))}
        <div className="myBlog">Liked Blog</div>
        {likeData.result?.map((article) => (
        <div className="favoriteArticleStrip">
        <Link to={`/blog/${article.BlogId}`}>
            <div className="favoriteArticleCard">
                <div className="titleAreaFavArticle">{article.Blog.title}</div>
            </div>
        </Link>
    </div>
    ))}
    </>
  )
}

export default ProfilePage