import { Link } from "react-router-dom";
import Card_product from "./card-product";
import ProductList from "./productList";

export default function Special_promo(){
    return(
        <>
        <div className="mt-36 mb-5 text-4xl lg1:text-5xl pl-5 md1:pl-16 font-bold name text-zinc-900 dark:text-zinc-50 ">
            SPESIAL PROMO
        </div>
        <div className="lg1:grid lg1:grid-cols-2 lg1:mx-14 ">
        <ProductList/>
        </div>
        <div className="flex items-center mt-20 pb-10 ">
            <Link className=" right-10 lg1:text-2xl absolute font-semibold name dark:text-zinc-50 " to="/kantin">
                Lebih banyak
            </Link>
            <div className="bg-zinc-900 dark:bg-zinc-50 w-[200px] h-[2px] "></div>
        </div>
        
        </>
    )
}