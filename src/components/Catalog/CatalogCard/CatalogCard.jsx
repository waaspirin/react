import s from "./CatalogCard.module.css";
import plus from "../../../assets/plus.svg";
import { Link } from "react-router";

export function CatalogCard({ product }) {
    return (
        <article className={s.card}>
            <Link
                to={`/product/${product.id}`}
                className={s.imageLink}
            >
                <img
                    className={s.image}
                    src={product.image}
                    alt={product.title}
                />
            </Link>

            <p className={s.category}>{product.category}</p>

            <h3 className={s.title}>
                {product.title}
            </h3>

            <div className={s.bottom}>
                <span className={s.price}>
                    {product.price} ₽
                </span>

                <Link to={`/product/${product.id}`}>
                    <button type="button" className={s.add}>
                        <img src={plus} alt="" />
                    </button>
                </Link>
            </div>
        </article>
    );
}