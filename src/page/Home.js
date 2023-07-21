import '../App.css';
import LogoDark from '../img/logo-dark.jpg'
import LogoDark2 from '../img/logo-dark-2.jpg'
import LogoLight from '../img/logo-light.png'
import LogoLight2 from '../img/logo-light-2.png'

function Home() {
  return (
    <>

    {/* content start */}
    <section className="content">
      <button className="close-btn">X</button>
      <p className="content__text">Sayt yangiliklaridan doimiy xabardor bo‘lish uchun Telegram sahifamizga obuna bo‘ling.</p>
      <a href="https://t.me/quadromi" className="btn">Ketdik</a>
    </section>
    {/* content end */}

    {/* header start */}
    <header className="header">

      <div className="container header__container">

        <a href="#" className="header__logo">𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</a>

        <nav className="nav">

          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">Bosh sahifa</a>
            </li>

            <li className="nav__item">
              <a href="#instruction" className="nav__link">Yo'riqnoma</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">Biz haqimizda</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">Xizmatlar</a>
            </li>
            
            <li className="nav__item">
              <a href="#" className="nav__link">Aloqa</a>
            </li>

          </ul>
          
        </nav>

      </div>

    </header>
    {/* header end */}

    {/* hero start */}
      <main className="hero" id='home'>

        <div className="container hero__container">

          <div className="hero__text-box">
            <h1 className="hero__title">Assalomu alaykum <br /> 𝓠𝓾𝓪𝓭𝓻𝓸 <span className="primary"><span>𝓪</span>𝓲</span> ga xush kelibsiz!</h1>
            <a href="#" className="btn hero__btn go-chat">Boshlash <span className="go-chat__icon">❯</span></a>
          </div>
          
        </div>

      </main>
      {/* hero end */}

      {/* instruction start */}
      <section className="instruction" id='instruction'>

        <div className="container instruction__container">

            <h2 className="instruction__title">Yo'riqnoma</h2>

            <div className="chat-box">

                <div className="chat__message my-message">
                    <p className="message-text">Iltimos, <b>O'zbek</b> tilida yoza olasizmi?</p>
                    <strong className="message-profile">You</strong>
                </div>

                <div className="chat__message ai-message">
                    <strong className="message-profile">ai</strong>
                    <p className="message-text">Ha, albatta! Men sizga <b>O'zbek</b> tilida yordam berishga tayyorman. Savolingizni yozing va men qo'shimcha ma'lumotlarga asoslanib javob beraman. Sizning savol yuboring!</p>
                </div>

                <div className="chat__message my-message">
                    <p className="message-text">Menda <b>Ingliz tili</b> fanidan 30 ta test savollari bor. Agar men ularni sizga yuborsam, ularni echib olasizmi? Undan tashqari, qiynalayotgan hayot haqida savollarim bor. Va keyinroq ulardan so'rayman.</p>
                    <strong className="message-profile">You</strong>
                </div>

                <div className="chat__message ai-message">
                    <strong className="message-profile">ai</strong>
                    <p className="message-text">Albatta, siz 30 ta <b>Ingliz tili</b> test savollarini yuborishingiz mumkin. Endi siz savollarni yuborishingiz mumkin, men javoblarni tekshiraman va natijalarni sizga yuboraman. Keyin hayot haqida savollaringizni beramiz. Iltimos, test savollaringizni yuboring!</p>
                </div>

            </div>

        </div>

      </section>
      {/* instruction end */}

      {/* about start */}
      <section className="about" id="about">

        <div className="container about__container">

            <h2 className="about__title">Biz haqimizda</h2>

            <div className="about__card-wrap">

              <div className="about__card-col">

                <div className="about__card">
                  <h3 className="about__card__title">Bizning 𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲 xizmatimiz haqida:</h3>
                  <p className="about__card__text">ChatGPT - OpenAI tomonidan tuzilgan eng yuqori texnologiyalar bilan tayyorlangan zamonaviy til modelidir. <br /> Ushbu model sizning savollaringizga javob berish, foydalanuvchilarga tarjima, savol-javoblar, matn yozish, kreativlik va yaratuvchanlik, texnologik masalalar yechish, ma'lumotlar taqdim etish va ko’plab turli xil vazifalarni bajarishda yordam beradi. <br /> <b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> yuqoridagi ko’rsatilgan vazifalarni bajaruvchi veb-sayt. <br /><br /> Model: muallifi: <a href="https://openai.com">openai.com</a> <br /><br /> Chatni boshlash uchun bosh sahifadagi <a href="#home">boshlash</a> tugmasini bosing.</p>
                </div>

                <div className="about__card">
                  <h3 className="about__card__title">Bizning 𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲 jamoamiz haqida:</h3>
                  <p className="about__card__text"><b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ning doimiy ravishda o'zgaruvchanligi: Bizning jamoamiz, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni doimiy ravishda yangilash, uning xizmatini yaxshilash va foydalanuvchilarga eng yaxshi tajribani taqdim etishga intiladi. <br /> <b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ta'lim va o'quv jarayonida o'ziga xos ishlatish: Biz <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ta'lim va o'quv jarayonida ham ishlatish imkoniyatini o'rganmoqdamiz. Biz kelgusida uning talabalarga javob berish, ma'lumotlarni tushuntirish va o'rganish jarayonini muvaffaqiyatli tashkil etmoqchimiz. Agar o’z hissangizni qo’shmoqchi bo’lsangiz bizning <a href="https://t.me/quadroai">rasmiy sahifa</a>mizga qo’shiling.</p>
                </div>

              </div>

                <div className="about__card mini-card">
                  <h3 className="about__card__title">𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲 ning imkoniyatlari va foydalari:</h3>
                  <p className="about__card__text"><b>𝓠𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ning imkoniyatlari va foydalari: <br /> Avtomatik tarjima: <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b>, turli tillar orasida avtomatik tarjima qilish imkoniyatiga ega. Siz o'zbek tilidagi matnlarni kiriting va ularni boshqa tillarga tarjima qilishni talab qilsangiz, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizga yordam beradi. <br /> Savollar va javoblar uchun <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> ni ishlatish: Savollaringizni yozib yuboring va <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizning savolingizni tushunib, undan kelib chiqqan eng maqbul javoblarni taklif qiladi. Bu usul orqali siz savollaringizga javob topish va vaqtini tejash imkoniyatiga ega bo'lasiz. <br /> Yordam va ma'lumotlar so'ralgan sohalarda <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> yordami: Sizning o'rganish uchun, bilimingizni oshirish uchun yoki turli sohalarda ma'lumot olishga muhtoj bo'lganingizda, <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> sizga yordam berishga intiladi. Siz so'ragan mavzuga oid bilimlarni va ma'lumotlarni <b>𝓺𝓾𝓪𝓭𝓻𝓸 𝓪𝓲</b> taqdim etishi uchun yordam olasiz.</p>
                </div>

            </div>

        </div>
      
      </section>
      {/* about end */}
    </>
  );
}

export default Home;