import React from 'react'
import '../App.css'

export default function Content() {
  return (
    <>
    {/* content start */}
    <section className="content content-active">
      <div className="container content__container">
        <div className="content-card">
          <button className="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <p className="content__text">Sayt yangiliklaridan doimiy xabardor bo‘lish uchun Telegram sahifamizga obuna bo‘ling.</p>
          <a href="https://t.me/quadromi" className="btn">Ketdik</a>
        </div>
      </div>
    </section>
    {/* content end */}
    </>
  );
};