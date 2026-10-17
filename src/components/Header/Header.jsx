import { figmaAssets } from "../../assets/figmaAssets";
import s from "./Header.module.css";

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <a href="#top" className={s.brand} aria-label="Рядом — главная">
                    <span className={s.brandIcon}>
                        <img src={figmaAssets.shoppingBag} alt="" />
                    </span>
                    <span>рядом</span>
                </a>

                <nav className={s.nav} aria-label="Основная навигация">
                    <a href="#top" className={s.active}>Главная</a>
                    <a href="#catalog">Каталог</a>
                    <a href="#footer" className={s.cartLink}>Корзина <span>3</span></a>
                </nav>

                <a href="#login" className={s.login}>
                    <img src={figmaAssets.userRound} alt="" />
                    <span>Войти</span>
                </a>
            </div>
        </header>
    );
}
