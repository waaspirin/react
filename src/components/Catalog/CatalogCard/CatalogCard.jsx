import { figmaAssets } from "../../../assets/figmaAssets";
import s from "./CatalogCard.module.css";
import productImg from "../../../assets/productImg.png"
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
                <button type="button" className={s.add}>
                    <img src={figmaAssets.plus} alt="" />
                </button>
            </div>
        </article>
    );
}
