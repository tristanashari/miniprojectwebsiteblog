import React from 'react'
import './styles.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import BlogPage from '../Pages/BlogPage'

function Navbar() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()


  const handleWrite = () => {
    if (token) {
      navigate("/write")
    } else {
      navigate("/login")
    }
  }

  const handleProfile = () => {
    if (token) {
      navigate("/profile")
    } else {
      navigate("/login")
    }
  }

  return (
    <>
    <div className="navbar">
        <div className="websiteName">
            <Link to="/"><h1>WriteLn</h1></Link>
        </div>
        <div className="navbarMenu">
            <button className="writeBtn" onClick={handleWrite}>Start Writing</button>
            <button className="profileBtn" onClick={handleProfile}></button>
        </div>
    </div>
    <Routes>
        <Route path="/" component={<LandingPage />} />
        <Route path="/blog" component={<BlogPage />} />
      </Routes>
    </>
  )
}

export default Navbar