import React, { useState } from "react";
import CarouselSection from "../Components/Carousel";
import ArticleCard from "../Components/ArticleCard";
import CategoryNav from "../Components/CategoryNav";
import Pagination from "../Components/Pagination";
import Favorite from "../Components/Favorite";
import Footer from "../Components/Footer";

function LandingPage() {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState("")

  function onClickCategory(cat) {
    setCategory(cat);
  }

  function onClickPage(pag) {
    setCurrentPage(pag)
  }

  return (
    <>
      <CarouselSection />
      <Favorite />
      <CategoryNav onClick={onClickCategory} />
      <ArticleCard category={category} page={currentPage} />
      <Pagination onClick={onClickPage} />
      <Footer />
    </>
  );
}

export default LandingPage;
