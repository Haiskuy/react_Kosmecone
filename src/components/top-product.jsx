import Card_product from "./card-product";
import "./static/output.css"
import "./static/animasi.css"
import "./static/style.css"
import { Link } from "react-router-dom";
import ProductList from "./productList";



export default function Top_products(){
    return(
        <>
        <div
            className="mt-16 mb-5 lg1:text-5xl pl-5 md1:pl-16 pt-10 text-4xl font-bold name text-zinc-900 dark:text-zinc-50">
            TOP PRODUK
        </div>
        <div className="lg1:grid lg1:grid-cols-2 lg1:mx-14 ">
        <ProductList/>
        </div>
        <div className="flex items-center mt-20">
            <Link className=" right-10 lg1:text-2xl absolute font-semibold name dark:text-zinc-50" to="/kantin">
                Lebih banyak
            </Link>
            <div className="bg-zinc-900 dark:bg-zinc-50 w-[200px] h-[2px] "></div>
        </div>
        
        
        
        
        </>
    )


}