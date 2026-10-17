import { figmaAssets } from "../../assets/figmaAssets";
import s from "./Categories.module.css";

const categories = [
    { title: "Для дома", subtitle: "Уют в деталях", image: figmaAssets.lamp, alt: "Настольная лампа" },
    { title: "Электроника", subtitle: "В своём ритме", image: figmaAssets.headphones, alt: "Наушники" },
    { title: "Аксессуары", subtitle: "Всегда с собой", image: figmaAssets.backpack, alt: "Городской рюкзак" },
    { title: "Спорт и отдых", subtitle: "Больше движения", image: figmaAssets.bottle, alt: "Бутылка для воды" },
];

export function Categories() {
    return (
        <section className={s.section} id="categories">
            <div className={s.heading}>
                <h2>Что вы ищете сегодня?</h2>
                <a href="#catalog">Все категории <img src={figmaAssets.arrowRightBlue} alt="" /></a>
            </div>
            <div className={s.grid}>
                {categories.map((category) => (
                    <a href="#catalog" className={s.card} key={category.title}>
                        <span className={s.text}>
                            <strong>{category.title}</strong>
                            <span>{category.subtitle}</span>
                            <img className={s.arrow} src={figmaAssets.arrowRightBlue} alt="" />
                        </span>
                        <span className={s.image}>
                            <img src={category.image} alt={category.alt} />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
