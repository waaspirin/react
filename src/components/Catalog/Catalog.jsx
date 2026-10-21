import { CatalogCard } from "./CatalogCard/CatalogCard";
import s from "./Catalog.module.css";

export function Catalog() {
    return (
        <section className={s.section} id="catalog">
            <div className={s.grid}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </section>
    );
}
