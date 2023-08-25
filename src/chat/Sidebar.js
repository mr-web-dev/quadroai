import React, { useState } from 'react'
import "../App.css"

export default function Sidebar() {
    const [sidebarContext , setSidebarContext] = useState(false)
  return (
    <>
        {/* sidebar start */}
        <section className="sidebar">

            <div className="container sidebar__container">

            <div className="sidebar-top">

                <h2 className="sidebar__title">ℚ𝕦𝕒𝕕𝕣𝕠 𝔸𝕚</h2>

                <div className="sidebar__btn-box">
                    <button className="btn sidebar__btn">Yangi chat <i className="fas fa-message"></i></button>
                    <button className="btn sidebar__btn">Ro'yhatdan o'tish <i className="fas fa-address-card"></i></button>
                    <button className="btn sidebar__btn">Ulashish <i className="fas fa-share"></i></button>
                    <button className="btn sidebar__btn">Admin <i className="fas fa-code"></i></button>
                </div>

            </div>

            <div className={sidebarContext == true ? "sidebar-bot sidebar-bot-active" : "sidebar-bot"}>
                
                <div className="sidebar__context">

                    <ul className="sidebar__list">

                        <li className="sidebar__item">
                            <button className="btn context__btn context__btn1">Profil <i className="fas fa-user"></i></button>
                        </li>

                        <li className="sidebar__item">
                            <button className="btn context__btn">Chat ko'rinishi <i className="fas fa-message"></i></button>
                        </li>

                        <li className="sidebar__item">
                            <button className="btn context__btn">Ro'yhatdan chiqish <i className="fas fa-address-card"></i></button>
                        </li>

                    </ul>

                </div>

                <div className="sidebar__card">
                    <div className="sidebar__card__profile"><i className="fas fa-user"></i></div>
                    <button onClick={()=> setSidebarContext(!sidebarContext)} className="sidebar__card__icon"><i className="fas fa-xmark"></i></button>
                </div>

            </div>

            </div>

        </section>
        {/* sidebar end */}
    </>
  );
};