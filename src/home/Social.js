import React from 'react';
import '../App.css'
import Btn from '../components/Btn';

export default function Social() {
  return (
    <>
    {/* social start */}
    <section className="social" id="social">

        <div className="container social__container">

            <h2 className="social__title">Ijtimoiy tarmoqlar</h2>

            <div className="social__card-wrap">

                <a href='https://t.me/quadroai/' className="social__card">
                    <i className="social__card__icon fab fa-telegram"></i>
                    <strong className="social__card__title">Telegram</strong>
                </a>

                <a href='https://instagram.com/quadro.ai/' className="social__card">
                    <i className="social__card__icon fab fa-instagram"></i>
                    <strong className="social__card__title">Instagram</strong>
                </a>

                <a href='mailto:webdasturchi2223@gmail.com' className="social__card">
                    <i className="social__card__icon fas fa-envelope"></i>
                    <strong className="social__card__title">Email</strong>
                </a>

                <a href='https://netlify.app' className="social__card">
                    <i className="social__card__icon fas fa-globe"></i>
                    <strong className="social__card__title">Website</strong>
                </a>

            </div>

            <Btn/>
            
        </div>

    </section>
    {/* social end */}
    </>
  );
};