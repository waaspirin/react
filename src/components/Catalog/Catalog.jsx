import { CatalogCard } from "./CatalogCard/CatalogCard";
import arrow from "../../assets/arrow.svg"
import s from "./Catalog.module.css";

export function Catalog() {
    return (
        <section className={s.section} id="catalog">
            <div className={s.heading}>
                <h2>Выбирают чаще всего</h2>
                <a href="#catalog">Весь каталог <img src={arrow} alt="" /></a>
            </div>
            <div className={s.grid}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </section>
    );
}
