
import s from "./Banner.module.css";
import  truck  from "../../assets/truck.svg"
import  arrow from "../../assets/arrow.svg"
import banner from "../../assets/banner.svg"

export function Banner() {
    return (
        <section className={s.section} id="top">
            <div className={s.hero}>
                <div className={s.content}>
                    <p className={s.eyebrow}>ДЛЯ ВАШЕГО КАЖДОГО ДНЯ</p>
                    <h1>Хорошие вещи.<br />Простые радости.</h1>
                    <p className={s.description}>
                        Для уютного дома, любимых занятий и новых планов. Найдите то, что сделает день лучше.
                    </p>
                    <a href="#catalog" className={s.button}>
                        Перейти в каталог
                        <img src={arrow} alt="" />
                    </a>
                </div>
                <div className={s.heroImage}>
                    <img src={banner} />
                </div>
            </div>

            <div className={s.benefits} id="advantages">
                <div className={s.benefit}>
                    <span className={s.benefitIcon}>
                        <img src={truck} alt="" />
                    </span>
                    <span className={s.benefitText}>
                        <strong>Доставка по всей России</strong>
                        <span>Бесплатно при заказе от 5 000 ₽</span>
                    </span>
                </div>
                <div className={s.benefit}>
                    <span className={s.benefitIcon}>
                        <img src={truck} alt="" />
                    </span>
                    <span className={s.benefitText}>
                        <strong>Доставка по всей России</strong>
                        <span>Бесплатно при заказе от 5 000 ₽</span>
                    </span>
                </div>
                <div className={s.benefit}>
                    <span className={s.benefitIcon}>
                        <img src={truck} alt="" />
                    </span>
                    <span className={s.benefitText}>
                        <strong>Доставка по всей России</strong>
                        <span>Бесплатно при заказе от 5 000 ₽</span>
                    </span>
                </div>

            </div>
        </section>
    );
}
