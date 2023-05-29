import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="newsletterContainer">
            <span>Never miss out a blog.</span>
            <input className="newsletterEmail" type="email" placeholder='Email'></input>
            <button className="subscribeBtn">Subscribe</button>
        </div>
        <div className="socials">
            <div className="socialPlatform">Follow our socials on Twitter & Instagam</div>
            <div className="socialAccount">@writelnblogging</div>
        </div>
    </div>
    </>
  )
}

export default Footer