import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Categories } from "./components/Categories/Categories";
import { Catalog } from "./components/Catalog/Catalog";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

export function App() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Banner />
                <Categories />
                <Catalog />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
