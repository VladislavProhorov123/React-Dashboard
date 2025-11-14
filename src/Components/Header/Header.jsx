import React, { useState } from "react";
import styles from "./Header.module.css";
import notification from "/src/assets/Icon.svg";
import user from "/src/assets/profile.svg"
import { LANGUAGES } from "../../Data/data";
import profile_icon1 from '/src/assets/profile-icon1.svg'
import profile_icon2 from '/src/assets/profile-icon2.svg'
import profile_icon3 from '/src/assets/profile-icon3.svg'
import profile_icon4 from '/src/assets/profile-icon4.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpenProfile, setIsOpenProfile] = useState(false)

  const handleSelect = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  const handleSelectProfile = () => {
    setIsOpenProfile(false)
  }

  const currentLang = LANGUAGES.find((lang) => lang.code === selectedLang);
  return (
    <div className={styles.header}>
      <div className={styles.header_inner}>
        <button>
          <i className="ri-menu-line"></i>
        </button>
        <label htmlFor="">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search" />
        </label>
      </div>
      <div className={styles.header_inner_right}>
        <button>
          <img src={notification} alt=""  />
        </button>
        <div className={styles.language_dropdown}>
          <button
            className={styles.dropdown_toggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={currentLang.flag} alt="" className={styles.main_flag_img} />
            <span>{currentLang.name}</span>
            <i className={isOpen === false ? 'ri-arrow-drop-down-line' : 'ri-arrow-drop-up-line'}></i>
          </button>
          {isOpen && (
            <ul className={styles.dropdown_menu}>
              {LANGUAGES.map((lang) => (
                <li key={lang.code} onClick={() => handleSelect(lang.code)}>
                  <div className={styles.menu_item}>
                    <img src={lang.flag} alt="" className={styles.flag_img} />
                    <span>{lang.name}</span>
                  </div>
                  {selectedLang === lang.code && <span><i className={styles["ri-check-fill"]}></i></span>}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.user_info}>
          <img src={user} alt="" />
          <div className={styles.user_info_inner}>
            <div className={styles.user_info_text}>
            <h4>Vlad Prohorov</h4>
            <p>Admin</p>
            </div>
            <button onClick={() => setIsOpenProfile(!isOpenProfile)} className={styles.info_circle}>
              <i className={isOpenProfile === false ? 'ri-arrow-drop-down-line' : 'ri-arrow-drop-up-line'}></i>
            </button>
            {isOpenProfile && (
            <ul className={styles.dropdown_menu_profile}>
              <li className={styles.profile_item} onClick={() => handleSelectProfile()}>
                <img src={profile_icon1} alt="" />Manage Account
              </li>
              <li className={styles.profile_item} onClick={() => handleSelectProfile()}>
                <img src={profile_icon2} alt="" />Change Password
              </li>
              <li className={styles.profile_item} onClick={() => handleSelectProfile()}>
                <img src={profile_icon3} alt="" />Activity Log 
              </li>
              <li className={styles.profile_item} onClick={() => handleSelectProfile()}>
                <img src={profile_icon4} alt="" />Log out
              </li>
            </ul>
          )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
