import styles from "../CatalogPage/CatalogPage.module.css"
import { Catalog } from "../../components/Catalog/Catalog"

export function CatalogPage(){
    return(
     <main className={styles.container}>
                <div className={styles.breadcrumbs}>
                    Главная　/　Каталог
                </div>

                <h1>Каталог товаров</h1>
                <p className={styles.subtitle}>
                    Всё необходимое для уюта вашего дома
                </p>

                <div className={styles.content}>
                    <aside className={styles.sidebar}>
                        <h3>Категории</h3>
                        <a href="#" className={styles.categoryActive}>Все товары</a>
                        <a href="#">Освещение</a>
                        <a href="#">Для кухни</a>
                        <a href="#">Для спальни</a>
                        <a href="#">Декор</a>

                        <div className={styles.filter}>
                            <h3>Цена, ₽</h3>
                            <div className={styles.priceInputs}>
                                <input placeholder="От" />
                                <input placeholder="До" />
                            </div>
                        </div>

                        <button className={styles.filterButton}>
                            Применить
                        </button>
                    </aside>

                    <section className={styles.catalog}>
                        <div className={styles.catalogTop}>
                            <span>Найдено товаров: 8</span>

                            <select defaultValue="popular">
                                <option value="popular">По популярности</option>
                                <option value="cheap">Сначала дешевле</option>
                                <option value="expensive">Сначала дороже</option>
                            </select>
                        </div>

                        <Catalog />

                        <div className={styles.pagination}>
                            <button>‹</button>
                            <button className={styles.currentPage}>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>›</button>
                        </div>
                    </section>
                </div>
            </main>

    )
}