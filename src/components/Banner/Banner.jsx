
import s from "./Banner.module.css";

import truck from "../../assets/truck.svg";
import truck2 from "../../assets/cat2.png";
import truck3 from "../../assets/cat3.png";
import arrow from "../../assets/arrow.svg";
import banner from "../../assets/banner.svg";


const benefits = [
    {
        id: 1,
        title: "Доставка по всей России",
        description: "Бесплатно при заказе от 5 000 ₽",
        icon: truck,
    },
    {
        id: 2,
        title: "Качество без компромиссов",
        description: "Проверяем каждую вещь сами",
        icon: truck2,
    },
    {
        id: 3,
        title: "Легко вернуть",
        description: "14 дней, чтобы передумать",
        icon: truck3,
    },
];

export function Banner() {
    return (
        <section className={s.section} id="top">
            <div className={s.hero}>
                <div className={s.content}>
                    <p className={s.eyebrow}>
                        ДЛЯ ВАШЕГО КАЖДОГО ДНЯ
                    </p>

                    <h1>
                        Хорошие вещи.
                        <br />
                        Простые радости.
                    </h1>

                    <p className={s.description}>
                        Для уютного дома, любимых занятий и новых планов.
                        Найдите то, что сделает день лучше.
                    </p>

                    <a href="#catalog" className={s.button}>
                        Перейти в каталог
                        <img src={arrow} alt="" />
                    </a>
                </div>

                <div className={s.heroImage}>
                    <img
                        src={banner}
                        alt="Товары для повседневной жизни"
                    />
                </div>
            </div>

            <div className={s.benefits} id="advantages">
                {benefits.map((benefit) => (
                    <div className={s.benefit} key={benefit.id}>
                        <span className={s.benefitIcon}>
                            <img src={benefit.icon} alt="" />
                        </span>

                        <span className={s.benefitText}>
                            <strong>{benefit.title}</strong>
                            <span>{benefit.description}</span>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
