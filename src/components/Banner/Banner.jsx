import { figmaAssets } from "../../assets/figmaAssets";
import s from "./Banner.module.css";

const benefits = [
    { icon: figmaAssets.truck, title: "Доставка по всей России", text: "Бесплатно при заказе от 5 000 ₽" },
    { icon: figmaAssets.shieldCheck, title: "Качество без компромиссов", text: "Проверяем каждую вещь сами" },
    { icon: figmaAssets.rotateCcw, title: "Легко вернуть", text: "14 дней, чтобы передумать" },
];

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
                        <img src={figmaAssets.arrowRight} alt="" />
                    </a>
                </div>
                <div className={s.heroImage}>
                    <img src={figmaAssets.hero} alt="Уютная гостиная с креслом и настольной лампой" />
                </div>
            </div>

            <div className={s.benefits} id="advantages">
                {benefits.map((benefit) => (
                    <div className={s.benefit} key={benefit.title}>
                        <span className={s.benefitIcon}>
                            <img src={benefit.icon} alt="" />
                        </span>
                        <span className={s.benefitText}>
                            <strong>{benefit.title}</strong>
                            <span>{benefit.text}</span>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
