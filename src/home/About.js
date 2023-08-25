import React from 'react'
import '../App.css'
import Btn from '../components/Btn';
import LogoImg from '../img/logo-light-2.png'

export default function About() {
  return (
    <>
    {/* about start */}
      <section className="about" id="about">

        <div className="container about__container">

          <h2 className="about__title">Biz haqimizda</h2>

          <div className="about__card-wrap">

            <div className="about__card">
              <i className="about__card__icon icon-red fas fa-users"></i>
              <h3 className="about__card__title">Bizning ℚ𝕦𝕒𝕕𝕣𝕠 𝔸𝕚 jamoamiz haqida:</h3>
              <p className="about__card__text"><b>ℚ𝕦𝕒𝕕𝕣𝕠 𝔸𝕚</b> ning doimiy ravishda o'zgaruvchanligi: Bizning jamoamiz, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni doimiy ravishda yangilash, uning xizmatini yaxshilash va foydalanuvchilarga eng yaxshi tajribani taqdim etishga intiladi.</p>
              <p className="about__card__text"><b>ℚ𝕦𝕒𝕕𝕣𝕠 𝔸𝕚</b> ni ta'lim va o'quv jarayonida o'ziga xos ishlatish: Biz <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ta'lim va o'quv jarayonida ham ishlatish imkoniyatini o'rganmoqdamiz. Biz kelgusida uning talabalarga javob berish, ma'lumotlarni tushuntirish va o'rganish jarayonini muvaffaqiyatli tashkil etmoqchimiz. Agar o’z hissangizni qo’shmoqchi bo’lsangiz bizning <a href="https://t.me/quadroai">rasmiy sahifa</a>mizga qo’shiling.</p>
            </div>

            <div className="about__card">
              <div className="about__card__img-box">
                <img src={LogoImg} alt="Logo img" className="about__card__img" />
              </div>
              <h3 className="about__card__title">ℚ𝕦𝕒𝕕𝕣𝕠 𝔸𝕚 ning imkoniyatlari va foydalari:</h3>
              <p className="about__card__text">Savollar va javoblar uchun <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ishlatish: Savollaringizni yozib yuboring va <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizning savolingizni tushunib, undan kelib chiqgan eng maqul javoblarni taklif qiladi. Bu usul orqali siz savollaringizga javob topish va vaqtingizni tejash imkoniyatiga ega bo'lasiz.</p>
              <p className="about__card__text">Yordam va ma'lumotlar so'ralgan sohalarda <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> yordami: Sizning o'rganish uchun, bilimingizni oshirish uchun yoki turli sohalarda ma'lumot olishga muhtoj bo'lganingizda, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizga yordam berishga intiladi. Siz so'ragan mavzuga oid bilimlarni va ma'lumotlarni <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> taqdim etishi uchun yordam olasiz.</p>
            </div>

          </div>

          <Btn/>

        </div>
      
      </section>
    {/* about end */}
    </>
  );
};