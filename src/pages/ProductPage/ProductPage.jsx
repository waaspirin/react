
import { useParams } from "react-router";
import { products } from "../../assets/data";
import styles from "./ProductPage.module.css";

export function ProductPage() {
    const { id } = useParams();

    const product = products.find(
        (item) => String(item.id) === String(id)
    );

    if (!product) {
        return (
            <div className={styles.page}>
                <main className={styles.container}>
                    <h1>Товар не найден</h1>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <main className={styles.container}>
                <div className={styles.breadcrumbs}>
                    Главная / Каталог / {product.title}
                </div>

                <section className={styles.product}>
                    <div className={styles.photo}>
                        <span className={styles.label}>
                            Хит продаж
                        </span>

                        <img
                            src={product.image}
                            alt={product.title}
                        />
                    </div>

                    <div className={styles.info}>
                        <div className={styles.article}>
                            <span>
                                Артикул: РД-{product.id}
                            </span>

                            <span className={styles.available}>
                                ● В наличии
                            </span>
                        </div>

                        <h1>{product.title}</h1>

                        <div className={styles.rating}>
                            <span>★★★★★</span>
                            <small>4,9 · 28 отзывов</small>
                        </div>

                        <p className={styles.description}>
                            {product.description}
                        </p>

                        <p className={styles.colorTitle}>
                            Цвет: {product.color}
                        </p>

                        <button
                            className={styles.color}
                            style={{
                                backgroundColor: product.color_block
                            }}
                        ></button>

                        <div className={styles.price}>
                            {product.price.toLocaleString("ru-RU")} ₽
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.addButton}>
                                Добавить в корзину
                            </button>

                            <button className={styles.favorite}>
                                ♡
                            </button>
                        </div>
                    </div>
                </section>

                <section className={styles.details}>
                    <div className={styles.tabs}>
                        <a
                            className={styles.selected}
                            href="#description"
                        >
                            Описание
                        </a>

                        <a href="#characteristics">
                            Характеристики
                        </a>

                        <a href="#reviews">
                            Отзывы (28)
                        </a>
                    </div>

                    <div
                        className={styles.detailContent}
                        id="description"
                    >
                        <div>
                            <h2>{product.title}</h2>

                            <p>
                                {product.description}
                            </p>
                        </div>

                        <div
                            className={styles.characteristics}
                            id="characteristics"
                        >
                            <div>
                                <span>Категория</span>
                                <span>{product.categoryId}</span>
                            </div>

                            <div>
                                <span>Цвет</span>
                                <span>{product.color}</span>
                            </div>

                            <div>
                                <span>Артикул</span>
                                <span>РД-{product.id}</span>
                            </div>

                            <div>
                                <span>Наличие</span>
                                <span>В наличии</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
