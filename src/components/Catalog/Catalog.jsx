import { CatalogCard } from "./CatalogCard/CatalogCard";
import s from "./Catalog.module.css";
import { products } from "../../assets/data";

export function Catalog() {
    return (
        <section className={s.section} id="catalog">
            <div className={s.grid}>
                {products.map((product) => (
                    <CatalogCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}