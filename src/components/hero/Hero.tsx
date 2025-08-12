import style from "./Hero.module.scss";
import Polyhedron from "../../assets/images/Polyhedron.svg";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero_about_us}>
        <h4>Зарабатывайте больше</h4>
        <h5>с AmoCRM.</h5>
        <p>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <img src={Polyhedron} alt="Polyhedron" />
      <div className={style.bonus}>
        <p>
          Вместе с{" "}
          <span className={style.highlight}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы
          дарим:
        </p>

        <div className={style.grid}>
          <div>
            <h6>ВИДЖЕТЫ</h6>
            <p>30 готовых решений</p>
          </div>
          <div>
            <h6>DASHBOARD</h6>
            <p>с показателями вашего бизнеса</p>
          </div>
          <div>
            <h6>SKYPE АУДИТ</h6>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div>
            <h6>35 ДНЕЙ</h6>
            <p>использования AmoCRM</p>
          </div>
        </div>
        <button className={style.btn}>Получить консультацию</button>
      </div>
    </section>
  );
}

export default Hero;
