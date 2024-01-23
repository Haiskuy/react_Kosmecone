import axios from "axios"
import { Link } from "react-router-dom";
export default function Card_product({product}){
    // const get(e){
    //     e.preventDefault()
    //     axios.get('http://localhost:8000/product',FormData)
    // }
    
    const dynamicBackgroundUrl = `http://localhost:8000/asset/${ product.image_cover}`;
    const encodedValue = decodeURIComponent(dynamicBackgroundUrl);

    return(
        
        <>
        {console.log(encodedValue)}
            <div
                    className="grid grid-cols-2 dark:bg-zinc-700 dark:border-zinc-400 px-6 hover:scale-105 hover:bg-[#e5e5e5] duration-200  lg1:mr-2 lg1:rounded-lg py-10 shadow-xl border border-zinc-300 my-3 name">
                    <div className="mr-1">
                        <img src={encodedValue} alt="" className={`bg-[#BFBFBF] w-full h-full object-cover bg-cover bg-center bg-no-repeat rounded-md`}/>
                    </div>
                    <div className="ml-1" >
                        <div id="harga1" className="mt-3 font-semibold text-2xl text-[#ffa600]">Rp.{product.price}</div>
                        <div id="produk1" className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50 ">{product.product_name}</div>
                        <div id="pemilik1" className="mt-1 text-zinc-60 text-zinc-600 dark:text-zinc-200 0">{product.user_name}</div>
                        <div id="class" className="mt-1 text-zinc-60 text-zinc-600 dark:text-zinc-200 0">{product.class}</div>

                        <Link target="_blank"
                        to="http://wa.me/+6285607864511?text=permisi%20kak,%20aku%20mau%20nanya%20dong">
                            <button
                                className="bg-[#D9D9D9] hover:bg-[#a5a5a5] duration-300 py-1 rounded-md w-[100%] mt-4">Whatsapp</button>
                        </Link>
                        <br/>
                        <Link to={`/detail/${product.idproduct}`}>
                            <button 
                                className="bg-[#FC3535] hover:bg-[#791919] duration-300 hover:border py-1 rounded-md w-[100%] mt-4 text-zinc-50 ">Detail
                                Produk</button >
                        </Link>
                    </div>
                    
            </div>

        
        
        </>
    )
}