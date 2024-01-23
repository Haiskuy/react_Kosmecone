

import topb from "../components/static/img/topB.svg"
import topw from "../components/static/img/topW.svg"
import Top_product from "../components/top-product";
import Searchcom from "../components/search";
import Special_promo from "../components/special-promo";
import Footer from "../components/footer";
import News from "../components/news";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


export default function Main() {
    const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/your-specific-path' && !localStorage.getItem('hasReloaded')) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, [location]);
  return (
    <>
    
      <Navbar/>
      <div className="overflow-x-hidden  dark:bg-zinc-800">
      
    <header
        className="w-screen h-screen  text-zinc-50 bg-[#292929] pt-[20px]  bg-[url('../asset/header-mobile1.png')]  lg1:bg-[url('../asset/header-desktop4.png')]  bg-bottom bg-cover  bg-no-repeat">
        <div className="fadeIn bottom-7 left-7 md1:left-24 md1:bottom-10  lg1:text-5xl font-bold z-50 absolute ">
            <div className="wrapper balo">
                SELAMAT DATANG DI
                <br/>
                KANTIN ONLINE
                <br/>

                <span className="text-4xl lg1:text-7xl lg1:font-extrabold  text-gradasi1">
                    SMECONE
                </span>


            </div>
            <a href="kantin.html">
                <button
                    className=" border-[0.5px] border-[#ffffff] bg-gradasi1  rounded-lg px-7 py-1 lg1:px-20 lg1:py-3 lg1:text-3xl mt-5 hover:border-transparent  duration-300">
                    JAJANAN 
                </button>
            </a>
        </div>
       
        <a href="#back">
            <div
                className="hover:bg-[#ffffff]  bg-transparan shadow-lg w-[45px] h-[45px] hover:scale-110 duration-200  rounded-full right-5 bottom-3 fixed z-50">
                <img className="hidden dark:block p-2 w-[100%]" src={topw} alt=""/>
                <img className="block dark:hidden p-2 w-[100%] " src={topb} alt=""/>

            </div>
        </a>
        <div className="absolute hidden lg1:block -left-[90px] lg1:-left-[75px] lef bottom-32 rotate-90 ">Smecone / smkn 1
            purwokerto</div>
    </header>

        <Searchcom/>
        <Top_product/>
        <Special_promo/>
        <News/>
        <Footer/>
      
        


      </div>
       
       
      </>
      
    )
}
