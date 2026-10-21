import { Banner } from "../../components/Banner/Banner"
import { Catalog } from "../../components/Catalog/Catalog"
import { Newsletter } from "../../components/Newsletter/Newsletter"
import{Categories} from "../../components/Categories/Categories"

export function HomePage(){
    return(
        <>
        <Banner />
        <Categories />
        <Catalog />
        <Newsletter />
        </>
    )
}