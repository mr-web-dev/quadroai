import React from 'react'
import '../App.css'

export default function Header() {
  return (
    <>
    {/* header start */}
    <header className="header">

      <div className="container header__container">

        <a href="#" className="header__logo">𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</a>

        <nav className="nav">

          <button className="bars-btn">
            <i className="fas fa-bars open-bars"></i>
            <i className="fas fa-times close-bars"></i>
          </button>

          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">Bosh sahifa</a>
            </li>

            <li className="nav__item">
              <a href="#instruction" className="nav__link">Yo'riqnoma</a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">Biz haqimizda</a>
            </li>
            
            <li className="nav__item">
              <a href="#contact" className="nav__link">Bog'lanish</a>
            </li>

          </ul>
          
        </nav>

      </div>

    </header>
    {/* header end */}
    </>
  );
};