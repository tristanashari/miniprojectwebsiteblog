import React, { useEffect, useState } from "react";
import Axios from "axios";
import dayjs from "dayjs";
import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import BlogPage from "../Pages/BlogPage";

function ArticleCard(props) {
  const [articleData, setArticleData] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [sortValue, setSort] = useState("");

  useEffect(() => {
    Axios.get(
      `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${props.category}&sort=${sortValue}&page=${props.page}&search=${searchValue}`
    )
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.category, sortValue, searchValue, props.page]);

  function handleSearch(value) {
    setSearch(value);
  }

  function sortDescending() {
    setSort("DESC");
  }

  function sortAscending() {
    setSort("ASC");
  }

  return (
    <>
      <div className="searchAndSortContainer">
        <div className="searchContainer">
          <input
            className="searchBar"
            type="text"
            placeholder="Search by Title"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="sortContainer">
          <span>Sort by</span>
          <button onClick={sortDescending} className="latestBtn">
            Latest
          </button>
          <button onClick={sortAscending} className="oldestBtn">
            Oldest
          </button>
        </div>
      </div>
      {articleData.result?.map((article) => (
        <div className="articleStrip">
          <Link to={`/blog/${article.id}`}>
            <div className="articleCard">
              <div className="writerArea">
                <div className="writerPic"></div>
                <span>{article.User.username}</span>
              </div>
              <div className="dateArea">
                <span>{dayjs(article.createdAt).format("DD/MM/YYYY")}</span>
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
          </Link>
        </div>
      ))}
      <Routes>
        <Route path="/blog/id" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default ArticleCard;
