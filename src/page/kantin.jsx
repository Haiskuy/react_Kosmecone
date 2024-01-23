import Navbar from "../components/navbar"
import Searchcom from "../components/search"
import Card from "../components/card-product"
import Footer from "../components/footer"
import topb from "../components/static/img/topB.svg"
import topw from "../components/static/img/topW.svg"
import { useState,useEffect} from 'react';
import Navbar1 from "../components/navbar1"
import ProductList from "../components/productList"



export default function Kantin(){
    
    const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));

    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);
    return(
        <>
         <div className="dark:bg-zinc-800">
                    <Navbar1/>
                <header>
                    <div
                        className="fadeIn  dark:text-zinc-50 balo font-bold mt-16 lg1:mt-28 mb-10 lg1:mb-16 text-center text-5xl lg1:text-7xl  ">
                        PRODUK SISWA
                    </div>
            
                    <Searchcom/>
                    <a href="#back">
                        <div
                            className="hover:bg-[#ffffff]  bg-transparan shadow-lg w-[45px] h-[45px] hover:scale-110 duration-200  rounded-full right-5 bottom-3 fixed z-50">
                            <img className="hidden dark:block p-2 w-[100%]" src={topw} alt=""/>
                            <img className="block dark:hidden p-2 w-[100%] " src={topb} alt=""/>

                        </div>
                    </a>

                </header>
                <div className=" dark:bg-zinc-900 py-[50px]">
                    <div className=" mx-auto">
                        <div className=" lg1:mx-14 grid grid-cols-1 lg1:grid-cols-2 gap-4 xl1:grid-cols-3">
                            <ProductList/>
                        </div>    
                    </div>
                    
                </div>

                <Footer/>
        </div>





  
                    
   
        
        
        

        
        </>

    )
}