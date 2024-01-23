
import axios from 'axios';
import { useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';
const { default: Navbar2 } = require("../components/navbar2");


export default function Detail(){
    const {id}=useParams()
    const [Products, SetProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        axios.get(`http://localhost:8000/product/detail/${id}`)
            .then((response) => {
                
                SetProducts(response.data.data);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log('Error fetching data', error);
                setIsLoading(false)
            });
    }, []);



    const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));

    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);

    return(
        <>
        <div className='bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50'>
        <Navbar2/>      
    
        <marquee behavior="" direction="" className="bg-zinc-100 dark:bg-zinc-700 py-2">Dukung terus Kantin Online Smecone
        dengan menggunakan
        terus platform ini Dukung
        terus Kantin Online Smecone dengan menggunakan terus platform ini</marquee>
    
    <div className=" md1:grid md1:grid-cols-2 items-center ">
        <div>
            <div className="slider-container overflow-hidden w-full max-w-full mx-auto md1:mx-0  my-0">
                <div className="slider-wrapper flex ">
                   
                    <div className="slider-item min-w-full">
                        <div className="w-[100%] h-[400px] md1:h-[650px] bg-apik bg-zinc-600 produk7-1"></div>
                    </div>
                    
                    <div className="slider-item min-w-full">
                        <div className="w-[100%] h-[400px] md1:h-[650px] bg-apik bg-zinc-700 produk7-2"></div>
                    </div>
                    
                    <div className="slider-item min-w-full">
                        <div className="w-[100%] h-[400px] md1:h-[650px] bg-apik bg-zinc-600 produk7-3"></div>
                    </div>
                </div>
            </div>
            <div className="slider-nav text-center ">
                <button onclick="prevSlide()">Sebelumnya</button>
                <button onclick="nextSlide()">Berikutnya</button>
            </div>
        </div>
        {isLoading?<div>loading</div>:  
        <div className="px-7 lg1:px-20 ">
            <div id="harga7" className="text-2xl mt-4 text-[#ffa600] font-semibold">Rp {Products[0].price}</div>
            <div id="produk7" className="text-5xl font-bold mt-4 text-red-600"> {Products[0].product_name}</div>
            <div id="pemilik7" className="text-xl mt-4 text-gray-500 font-bold">{Products[0].user_name}</div>
            <div className="mt-6">
            {Products[0].description}
            </div>
        </div>}
    </div>


    <div className="grid grid-cols-2 px-10 mt-20 w-screen  lg1:bottom-0 ">
        <a href="#">          
            <button
                className="rounded-sm duration-300 hover:bg-[#919191] bg-zinc-300 dark:text-zinc-900 w-[100%] py-2 mr-2  text-center  text-2xl  ">
                Beli</button>
        </a>
        <a href="#">
            <button
                className="rounded-sm duration-300 hover:bg-[#a52727] text-zinc-50 bg-[#FC3535] w-[100%] py-2 ml-2  text-center text-2xl  ">
                Pre-Order</button>
        </a>
    </div>
    </div>      
        
        </>

    )
}

