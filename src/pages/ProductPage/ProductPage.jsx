
import styles from "./ProductPage.module.css";
import lamp from "../../assets/lamp2.png"

export function ProductPage() {
    return (
        <div className={styles.page}>
            <main className={styles.container}>
                <div className={styles.breadcrumbs}>
                    Главная   /   Каталог   /   Для дома   /   Настольная лампа «Линия»
                </div>

                <section className={styles.product}>
                    <div className={styles.photo}>
                        <span className={styles.label}>Хит продаж</span>
                        <img src={lamp} alt="Настольная лампа Линия" />
                    </div>

                    <div className={styles.info}>
                        <div className={styles.article}>
                            <span>Артикул: РД-1001</span>
                            <span className={styles.available}>● В наличии</span>
                        </div>

                        <h1>Настольная лампа «Линия»</h1>

                        <div className={styles.rating}>
                            <span>★★★★★</span>
                            <small>4,9 · 28 отзывов</small>
                        </div>

                        <p className={styles.description}>
                            Мягкий свет для любимых вечеров. Лаконичная лампа
                            с металлическим абажуром впишется в рабочее
                            пространство или уютный уголок у кровати.
                        </p>

                        <p className={styles.colorTitle}>Цвет: молочный</p>
                        <button className={styles.color}></button>

                        <div className={styles.price}>3 490 ₽</div>

                        <div className={styles.buttons}>
                            <button className={styles.addButton}>
                                Добавить в корзину
                            </button>
                            <button className={styles.favorite}>♡</button>
                        </div>
                    </div>
                </section>

                <section className={styles.details}>
                    <div className={styles.tabs}>
                        <a className={styles.selected} href="#description">
                            Описание
                        </a>
                        <a href="#characteristics">Характеристики</a>
                        <a href="#reviews">Отзывы (28)</a>
                    </div>

                    <div className={styles.detailContent} id="description">
                        <div>
                            <h2>Свет, с которым уютнее</h2>
                            <p>
                                «Линия» создана для повседневных ритуалов:
                                почитать перед сном, записать идею или просто
                                замедлиться. Широкий абажур рассеивает свет,
                                а устойчивое основание занимает немного места.
                                Выключатель удобно расположен на проводе.
                                Лампочка E27 приобретается отдельно.
                            </p>
                        </div>

                        <div className={styles.characteristics} id="characteristics">
                            <div><span>Материал</span><span>Металл</span></div>
                            <div><span>Размеры</span><span>28 × 28 × 42 см</span></div>
                            <div><span>Цоколь / мощность</span><span>E27 / до 40 Вт</span></div>
                            <div><span>Гарантия</span><span>12 месяцев</span></div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

