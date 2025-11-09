import React, { useState } from "react";
import "./Header.css";
import notification from "/src/assets/Icon.svg";
import user from "/src/assets/profile.svg"
import { LANGUAGES } from "../../Data/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpneProfile, setIsOpneProfile] = useState(false)

  const handleSelect = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  const currentLang = LANGUAGES.find((lang) => lang.code === selectedLang);
  return (
    <div className="header">
      <div className="header-inner">
        <button>
          <i className="ri-menu-line"></i>
        </button>
        <label htmlFor="">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search" />
        </label>
      </div>
      <div className="header-inner-right">
        <button>
          <img src={notification} alt="" className="" />
        </button>
        <div className="language-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={currentLang.flag} alt="" className="main-flag-img" />
            <span>{currentLang.name}</span>
            <i className={isOpen === false ? 'ri-arrow-drop-down-line' : 'ri-arrow-drop-up-line'}></i>
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {LANGUAGES.map((lang) => (
                <li key={lang.code} onClick={() => handleSelect(lang.code)}>
                  <div className="menu-item">
                    <img src={lang.flag} alt="" className="flag-img" />
                    <span>{lang.name}</span>
                  </div>
                  {selectedLang === lang.code && <span><i className="ri-check-fill"></i></span>}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="user-info">
          <img src={user} alt="" />
          <div className="user-info-inner">
            <div className="user-info-text">
            <h4>Vlad Prohorov</h4>
            <p>Admin</p>
            </div>
            <button onClick={() => setIsOpneProfile(!isOpneProfile)} className="info-circle">
              <i className={isOpneProfile === false ? 'ri-arrow-drop-down-line' : 'ri-arrow-drop-up-line'}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
