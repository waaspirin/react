import s from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={s.footer} id="footer">
            <div className={s.content}>
                <div className={s.about}>
                    <a href="#top" className={s.logo}>рядом</a>
                    <p>Хорошие вещи для дома, работы и всего, что между.</p>
                </div>
                <div className={s.column}>
                    <h3>Магазин</h3>
                    <a href="#top">Главная</a>
                    <a href="#catalog">Каталог</a>
                    <a href="#footer">Корзина</a>
                </div>
                <div className={s.column}>
                    <h3>Покупателям</h3>
                    <a href="#footer">Доставка и оплата</a>
                    <a href="#footer">Обмен и возврат</a>
                    <a href="#footer">Вопросы и ответы</a>
                </div>
                <div className={s.contact}>
                    <h3>Всегда на связи</h3>
                    <a className={s.phone} href="tel:88005553535">8 800 555-35-35</a>
                    <a className={s.email} href="mailto:hello@ryadom.ru">hello@ryadom.ru</a>
                    <p>Ежедневно, с 9:00 до 21:00</p>
                </div>
            </div>
            <div className={s.bottom}>
                <span>© 2026 «Рядом». Всё нужное — рядом.</span>
                <a href="#footer">Политика конфиденциальности</a>
                <span className={s.payments}>МИР · СБП · Банковские карты</span>
            </div>
        </footer>
    );
}
