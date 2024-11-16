import Head from "../components/Head"
import Banner from "../sections/catalog/Banner"
import Products from "../sections/catalog/Products"
import Contacts from "../sections/shared/Contacts"


const Catalog = () => {
    return (
        <>
        <Head
            description=""
            keywords=""
            title=""
        />
        <main>
            <Banner />
            <Products />
            <Contacts />
        </main>
    </>
    )
  }
  
  export default Catalog