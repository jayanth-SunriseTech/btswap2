import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__page">
      <div className="footer-list row">
        <div className="col-xxl-3 col-xs-6 footer-group">
          <ul className="about-list">
            <li>About</li>
            <li>Contact</li>
            <li>Brand</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Bt Tokens</li>
          </ul>
        </div>
        <div className="col-xxl-3 col-xs-6 footer-group">
          <ul className="about-list">
            <li>Help </li>
            <li>Customer Support</li>
            <li>Troubleshooting</li>
            <li>Guides</li>
          </ul>
        </div>
        <div className="col-xxl-3 col-xs-12 footer-group">
          <ul className="about-list">
            <li>Developers</li>
            <li>Github</li>
            <li>Documentation</li>
            <li>Bug Bounty</li>
            <li>Audits</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-xxl-3 col-xs-12 footer__brand">
          <img className="footer__logo" src="Logo.png"></img>
          <span className="footer__logo_brand">BT Swap</span>
        </div>
      </div>
      <div className="footer-bottom row">
          <div className="col-xxl-9 col-xs-12">
          <span className="online">Online Store</span>
          <div className="social-media-icons">
          <i class="fab fa-twitter social-icon"></i>
          <i class="fab fa-telegram social-icon"></i>
          <i class="fab fa-reddit social-icon"></i>
          <i class="fab fa-instagram social-icon"></i>
          <i class="fab fa-github social-icon"></i>
          <i class="fab fa-discord social-icon"></i>
          </div>
          <img src="Worldfooter.svg" className="world-footer"></img>
          <span className="footer-language">EN</span>
          </div>
          <div className="col-xxl-3 col-xs-12">
          <img src="bootomlogo.svg"></img>
          <span className="footer-balance">$12.13</span>

          <button className="footer-btn">Buy Swap <i class="fas fa-angle-right"></i></button>
          </div>
          

          
      </div>
    </div>
  );
}

export default Footer;
