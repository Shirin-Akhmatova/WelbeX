import style from "./Header.module.scss";
import Logo from "../assets/logo/logo_welbex.svg";
import Telegram from "../assets/icons/telegram.svg";
import Viber from "../assets/icons/viber.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo_wrapper}>
        <img src={Logo} alt="logo welbex" className={style.logo} />
        <p>
          крупный интегратор AmoCRM <br /> в Росcии и ещё 8 странах
        </p>
      </div>
      <nav className={style.nav_bar}>
        <ul>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </nav>
      <div className={style.contacts}>
        <h6>+7 495 471-41-63</h6>
        <img src={Telegram} alt="telegram" />
        <img src={Viber} alt="viber" />
        <img src={Whatsapp} alt="whatsapp" />
      </div>
    </header>
  );
}

export default Header;
