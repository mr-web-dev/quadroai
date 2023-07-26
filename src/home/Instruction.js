import React from 'react'
import '../App.css'
import Btn from '../components/Btn'

export default function Instruction() {
  return (
    <>
    {/* instruction start */}
      <section className="instruction" id='instruction'>

        <div className="container instruction__container">

            <h2 className="instruction__title">Yo'riqnoma</h2>

            <div className="chat-box">

                <div className="chat__message my-message">
                    <p className="message-text">Iltimos, menga <b>O'zbek</b> tilida yoza olasanmi?</p>
                    <strong className="message-profile">Siz</strong>
                </div>

                <div className="chat__message ai-message">
                    <strong className="message-profile">ai</strong>
                    <p className="message-text">Ha, albatta! Men sizga <b>O'zbek</b> tilida yordam berishga tayyorman. Savolingizni yozing va men qo'shimcha ma'lumotlarga asoslanib javob beraman. Sizning savol yuboring!</p>
                </div>

                <div className="chat__message my-message">
                    <p className="message-text">Menda <b>Ingliz tili</b> fanidan 30 ta test savollari bor. Agar men ularni senga yuborsam, ularni echib olasanmi? Undan tashqari, qiynalayotgan hayot haqida savollarim bor. Va keyinroq ulardan so'rayman.</p>
                    <strong className="message-profile">Siz</strong>
                </div>

                <div className="chat__message ai-message">
                    <strong className="message-profile">ai</strong>
                    <p className="message-text">Albatta, siz 30 ta <b>Ingliz tili</b> test savollarini yuborishingiz mumkin. Endi siz savollarni yuborishingiz mumkin, men javoblarni tekshiraman va natijalarni sizga yuboraman. Keyin hayot haqida savollaringizni beramiz. Iltimos, test savollaringizni yuboring!</p>
                </div>

            </div>

            <Btn/>

        </div>

      </section>
      {/* instruction end */}
      </>
  )
}
