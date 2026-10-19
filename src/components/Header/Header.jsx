import user from "../../assets/user.svg"
import s from "./Header.module.css";
import logo2 from "../../assets/logo2.svg"

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <a href="#top" className={s.brand} aria-label="Рядом — главная">
                    <span className={s.brandIcon}>
                        <img src={logo2} alt="" />
                    </span>
                    <span>рядом</span>
                </a>

                <nav className={s.nav} aria-label="Основная навигация">
                    <a href="#top" className={s.active}>Главная</a>
                    <a href="#catalog">Каталог</a>
                    <a href="#footer" className={s.cartLink}>Корзина <span>3</span></a>
                </nav>

                <a href="#login" className={s.login}>
                    <img src={user} alt="" />
                    <span>Войти</span>
                </a>
            </div>
        </header>
    );
}
