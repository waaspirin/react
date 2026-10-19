
import s from "./Categories.module.css";
import arrow from "../../assets/arrow.svg"
import lamp2 from "../../assets/lamp2.png"


export function Categories() {
    return (
        <section className={s.section} id="categories">
            <div className={s.heading}>
                <h2>Что вы ищете сегодня?</h2>
                <a href="#catalog">Все категории <img src={arrow} alt="" /></a>
            </div>
            <div className={s.grid}>
               
                    <a href="#catalog" className={s.card}>
                        <span className={s.text}>
                            <strong>Для дома</strong>
                            <span>Уют в деталях</span>
                            <img className={s.arrow} src={arrow} alt="" />
                        </span>
                        <span className={s.image}>
                            <img src={lamp2} />
                        </span>
                    </a>
                    <a href="#catalog" className={s.card}>
                        <span className={s.text}>
                            <strong>Для дома</strong>
                            <span>Уют в деталях</span>
                            <img className={s.arrow} src={arrow} alt="" />
                        </span>
                        <span className={s.image}>
                            <img src={lamp2} />
                        </span>
                    </a>
                    <a href="#catalog" className={s.card}>
                        <span className={s.text}>
                            <strong>Для дома</strong>
                            <span>Уют в деталях</span>
                            <img className={s.arrow} src={arrow} alt="" />
                        </span>
                        <span className={s.image}>
                            <img src={lamp2} />
                        </span>
                    </a>
                    <a href="#catalog" className={s.card}>
                        <span className={s.text}>
                            <strong>Для дома</strong>
                            <span>Уют в деталях</span>
                            <img className={s.arrow} src={arrow} alt="" />
                        </span>
                        <span className={s.image}>
                            <img src={lamp2} />
                        </span>
                    </a>
            </div>
        </section>
    );
}
