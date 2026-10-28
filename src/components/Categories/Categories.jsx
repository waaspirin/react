
import s from "./Categories.module.css";

import arrow from "../../assets/arrow.svg";
import lamp2 from "../../assets/lamp2.png";
import electronicsImage from "../../assets/card10.png";
import accessoriesImage from "../../assets/card9.png";
import sportImage from "../../assets/card4.png";

import { categories as allCategories } from "../../assets/data";

const categoryDetails = {
    "1": {
        title: "Для дома",
        subtitle: "Уют в деталях",
        image: lamp2,
        alt: "Настольная лампа",
    },
    "2": {
        title:"Электроника",
        subtitle: "В своём ритме",
        image: electronicsImage,
        alt: "Электроника",
    },
    "3": {
        title:"Аксессуары",
        subtitle: "Всегда с собой",
        image: accessoriesImage,
        alt: "Сумка",
    },
    "4": {
        title:"Спорт и отдых",
        subtitle: "Больше движения",
        image: sportImage,
        alt: "Товары для активного отдыха",
    },
};

const categories = allCategories.filter(
    (category) => category.id !== "all"
);

export function Categories() {
    return (
        <section className={s.section} id="categories">
            <div className={s.heading}>
                <h2>Что вы ищете сегодня?</h2>

                <a href="#catalog">
                    Все категории
                    <img src={arrow} alt="" />
                </a>
            </div>

            <div className={s.grid}>
                {categories.map((category) => {
                    const details = categoryDetails[category.id];

                    if (!details) {
                        return null;
                    }

                    return (
                        <a
                            href="#catalog"
                            className={s.card}
                            key={category.id}
                        >
                            <span className={s.text}>
                                <strong>{details.title}</strong>

                                <span>{details.subtitle}</span>

                                <img
                                    className={s.arrow}
                                    src={arrow}
                                    alt=""
                                />
                            </span>

                            <span className={s.image}>
                                <img
                                    src={details.image}
                                    alt={details.alt}
                                />
                            </span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
