import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SettingsPage() {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate("/");
    }
  return (
    <>
    <div><button className="buttonInSettings">Change Username</button></div>
    <div><button className="buttonInSettings">Change Profile Picture</button></div>
    <div><button className="buttonInSettings">Change Password</button></div>
    <div><Link to="/profile"><button className="backToProfile">Back To Profile</button></Link></div>
    <div><button onClick={handleLogOut} className="logOutBtn">Log out</button></div>
    </>
  )
}

export default SettingsPage