import './App.css';
import BlogPage from './Pages/BlogPage';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar';
import FavBlogPage from './Pages/FavBlogPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';
import WritePage from './Pages/WritePage';
import SettingsPage from './Pages/SettingsPage';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blog/favorite" element={<FavBlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
