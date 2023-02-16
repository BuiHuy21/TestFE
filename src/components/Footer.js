import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logo-top">
          <img src="/logo.png" alt="" />
          <div className="title">DataWarehouse</div>
        </div>
        <div className="footer__logo-bottom">
          <div className="footer__logo-title">
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
          </div>
          <div className="footer__logo-desc">
            info@warehouse.project 1-232-3434 (Main)
          </div>
        </div>
      </div>
      <div className="footer__about">
        <div className="footer__heading">About</div>
        <ul className="footer__list">
          <li className="footer__item">Profile</li>
          <li className="footer__item">Freatures</li>
          <li className="footer__item">Carreer</li>
          <li className="footer__item">DW news</li>
        </ul>
      </div>
      <div className="footer__about">
        <div className="footer__heading">Help</div>
        <ul className="footer__list">
          <li className="footer__item">Supports</li>
          <li className="footer__item">Sign Up</li>
          <li className="footer__item">Guide</li>
          <li className="footer__item">Reports</li>
          <li className="footer__item">Q&A</li>
        </ul>
      </div>
      <div className="footer__social">
        <div className="footer__heading">Social Media</div>
        <div className="footer__listSocial">
          <div className="footer__list__item"></div>
          <div className="footer__list__item"></div>
          <div className="footer__list__item"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
