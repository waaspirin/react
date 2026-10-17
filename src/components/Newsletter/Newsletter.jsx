import s from "./Newsletter.module.css";

export function Newsletter() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.copy}>
                    <h2>Хорошие новости — рядом</h2>
                    <p>Новинки, полезные подборки и специальные предложения. Без лишних писем.</p>
                </div>
                <form className={s.form} onSubmit={handleSubmit}>
                    <label htmlFor="newsletter-email">Ваш email</label>
                    <div className={s.controls}>
                        <input id="newsletter-email" type="email" placeholder="example@mail.ru" required />
                        <button type="submit">Подписаться</button>
                    </div>
                    <p>Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности.</p>
                </form>
            </div>
        </section>
    );
}
