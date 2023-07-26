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

            <div className="about__card-col">

              <div className="about__card">
                <i class="about__card__icon icon-blue fas fa-gears"></i>
                <h3 className="about__card__title">Bizning 𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲 xizmatimiz haqida:</h3>
                <p className="about__card__text">ChatGPT - OpenAI tomonidan tuzilgan eng yuqori texnologiyalar bilan tayyorlangan zamonaviy til modelidir. <br /> Ushbu model sizning savollaringizga javob berish, foydalanuvchilarga tarjima, savol-javoblar, matn yozish, kreativlik va yaratuvchanlik, texnologik masalalar yechish, ma'lumotlar taqdim etish va ko’plab turli xil vazifalarni bajarishda yordam beradi. <br /> <b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> yuqoridagi ko’rsatilgan vazifalarni bajaruvchi veb-sayt. <br /><br /> Model: muallifi: <a href="https://openai.com">openai.com</a> <br /><br /> Chatni boshlash uchun bosh sahifadagi <a href="#home">boshlash</a> tugmasini bosing.</p>
              </div>

              <div className="about__card">
                <i className="about__card__icon icon-red fas fa-users"></i>
                <h3 className="about__card__title">Bizning 𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲 jamoamiz haqida:</h3>
                <p className="about__card__text"><b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ning doimiy ravishda o'zgaruvchanligi: Bizning jamoamiz, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni doimiy ravishda yangilash, uning xizmatini yaxshilash va foydalanuvchilarga eng yaxshi tajribani taqdim etishga intiladi. <br /><br /> <b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ta'lim va o'quv jarayonida o'ziga xos ishlatish: Biz <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ta'lim va o'quv jarayonida ham ishlatish imkoniyatini o'rganmoqdamiz. Biz kelgusida uning talabalarga javob berish, ma'lumotlarni tushuntirish va o'rganish jarayonini muvaffaqiyatli tashkil etmoqchimiz. Agar o’z hissangizni qo’shmoqchi bo’lsangiz bizning <a href="https://t.me/quadroai">rasmiy sahifa</a>mizga qo’shiling.</p>
              </div>

            </div>

            <div className="about__card mini-card">
              <div className="about__card__img-box">
                <img src={LogoImg} alt="Logo img" className="about__card__img" />
              </div>
              <h3 className="about__card__title">𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲 ning imkoniyatlari va foydalari:</h3>
              <p className="about__card__text"><b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ning imkoniyatlari va foydalari: <br /> Avtomatik tarjima: <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b>, turli tillar orasida avtomatik tarjima qilish imkoniyatiga ega. Siz o'zbek tilidagi matnlarni kiriting va ularni boshqa tillarga tarjima qilishni talab qilsangiz, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizga yordam beradi. <br /> Savollar va javoblar uchun <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ishlatish: Savollaringizni yozib yuboring va <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizning savolingizni tushunib, undan kelib chiqqan eng maqbul javoblarni taklif qiladi. Bu usul orqali siz savollaringizga javob topish va vaqtini tejash imkoniyatiga ega bo'lasiz. <br /> Yordam va ma'lumotlar so'ralgan sohalarda <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> yordami: Sizning o'rganish uchun, bilimingizni oshirish uchun yoki turli sohalarda ma'lumot olishga muhtoj bo'lganingizda, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizga yordam berishga intiladi. Siz so'ragan mavzuga oid bilimlarni va ma'lumotlarni <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> taqdim etishi uchun yordam olasiz.</p>
            </div>

          </div>

          <Btn/>

        </div>
      
      </section>
    {/* about end */}
    </>
  );
};