
import s from "./CatalogCard.module.css";
import productImg from "../../../assets/productImg.png"
import plus from "../../../assets/plus.svg"
import { Link } from "react-router";
import { PATH } from "../../../routing/Routing";
export function CatalogCard() {
    return (
        <article className={s.card}>
            <a href="#catalog" className={s.imageLink}>
                <img className={s.image} src={productImg} alt="" />
            </a>
            <p className={s.category}>Для дома</p>
            <h3 className={s.title}>Настольная лампа «Линия»</h3>
            <div className={s.bottom}>
                <span className={s.price}>3 490 ₽</span>
                <Link to={PATH.Product}>
                <button type="button" className={s.add}>
                    <img src={plus} alt="" />
                </button>
                </Link>
            </div>
        </article>
    );
}
