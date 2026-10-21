import user from "../../assets/user.svg"
import s from "./Header.module.css";
import logo2 from "../../assets/logo2.svg"
import { Link } from "react-router";
import { PATH } from "../../routing/Routing";

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                <Link to={PATH.Home} className={s.brand} aria-label="Рядом — главная">
                    <span className={s.brandIcon}>
                        <img src={logo2} alt="" />
                    </span>
                    <span>рядом</span>
                </Link>

                <nav className={s.nav} aria-label="Основная навигация">
                    <Link to={PATH.Home} className={s.active}>Главная</Link>
                    <Link to={PATH.Catalog}>Каталог</Link>
                    <Link to={PATH.NotFound}  className={s.cartLink}>Корзина <span>3</span></Link>
                </nav>

                <a href="" className={s.login}>
                    <img src={user} alt="" />
                    <span>Войти</span>
                </a>
            </div>
        </header>
    );
}
