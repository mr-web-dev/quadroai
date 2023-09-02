import React, { useState } from 'react'
import '../App.css'

export default function Content() {
  setInterval(() => {
    setContent(true);
  }, 300000);
  const [content , setContent] = useState(false);
  return (
    <>
    {/* content start */}
    <section className={content ? "content content-active": "content content-hidden"}>
      <div className="container content__container">
        <div className="content-card">
          <button onClick={()=> setContent(!content)} className="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <p className="content__text">Sayt yangiliklaridan doimiy xabardor bo‘lish uchun <b>TELEGRAM</b> sahifamizga obuna bo‘ling.</p>
          <a href="https://t.me/quadroaiuz" className="btn">Ketdik</a>
        </div>
      </div>
    </section>
    {/* content end */}
    </>
  );
};