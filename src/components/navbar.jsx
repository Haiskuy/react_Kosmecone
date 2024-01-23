
//import './static/navbar.css'
import { Outlet,Link } from 'react-router-dom';
 
import logo from "./static/img/Group_1.png"
import { useState,useEffect} from 'react';
import ScreenSize from './screensize'
import "./static/output.css"
import "./static/animasi.css"
import "./static/style.css"
import sun from "./static/img/sun.svg"
import moon from "./static/img/moon.svg"
import Kantin from "../page/kantin"
import Cookies from 'js-cookie'
import axios from 'axios';
import { Authdata } from './authwrapper';


function Navbar(){
    // const [open,setopen]=useState(false )
    // const Comp=()=>{
    //     return(
    //                         <ul className="items">
    //                         <li className='l'><Link to="/kantin" >about</Link></li>
    //                         <li className='l'><Link to="/about" >project</Link></li>
    //                         <li className='l' ><Link to="/Profile" >profile</Link></li>
    //                         </ul>
    // )
    // }
//     const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     // Initial check for authentication status
//     const checkAuthentication = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/user/authenticate', { withCredentials: true });
//         console.log(response);
//         setLoggedIn(true)
//       } catch (error) {
//         console.log('Error fetching data', error);
//         setLoggedIn(false)

//       }
//     };

//     checkAuthentication();

    
//   }, [ ]);
    const {loggedIn}=Authdata()
    function updatemenu() {
        const responsiveMenu = document.getElementById('responsive-menu');
        const menu = document.getElementById('menu');

        if (responsiveMenu.checked === true) {
            menu.style.borderBottomRightRadius = '0';
            menu.style.borderBottomLeftRadius = '0';
        } else {
            menu.style.borderRadius = '0px';
        }
    }
    
    
 

    const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));

    const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle('dark', !isDarkTheme);
        
        localStorage.setItem('Theme', newTheme);
    };  

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
        const sunIcon = document.querySelector('.sun');
        const moonIcon = document.querySelector('.moon');
        
        sunIcon.addEventListener('click', toggleTheme);
        moonIcon.addEventListener('click', toggleTheme);
        

        return () => {
            sunIcon.removeEventListener('click', toggleTheme);
            moonIcon.removeEventListener('click', toggleTheme);
        };
    }, [isDarkTheme]);
    

return(
        
        
        <>
        

            {/* <nav id='menu' className="flex justify-center items-center absolute lg1:mt-3  w-[100%] bg-zinc-50 ">
                <input type='checkbox' id='responsive-menu' onClick={()=>updatemenu}/><label></label>

                <div id="back" className="text-xl cursor-pointer pr-2 duration-300  ">
                    <span className="font-bold text-[#FC3535]">
                        KOS</span>MECONE
                </div>
                <ul className="justify-center flex text-zinc-50 ">
                    <div>
                        <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/">Home</Link></li>
                        <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/kantin">kantin</Link></li>
                        <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/about">about</Link></li>
                        <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/login">login</Link>
                        </li>
                        <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/signin">sign
                                in</Link></li>
                    </div>
                </ul>
                <div className="pr-5 pl-2">
                    <img className={`sun w-[25px] md1:w-[35px] cursor-pointer ${isDarkTheme ? '' : 'display-none'}`} src={sun} alt="qwerw"/>
                    <img className={`moon w-[25px] md1:w-[35px] cursor-pointer ${isDarkTheme ? 'display-none' : ''}`}  src={moon} alt="were"/>
                </div>
            </nav> */}


            
            <nav id='menu' className="flex justify-center items-center absolute lg1:mt-3  w-[100%] bg-zinc-50 ">
    <input type='checkbox' id='responsive-menu' onClick={()=>updatemenu}/><label></label>
   
    <div id="back" className="text-xl cursor-pointer pr-2 duration-300  ">
        <span className="font-bold text-[#FC3535]">
            KOS</span>MECONE
    </div>
    <ul className="justify-center flex text-zinc-50 ">
        <div>
            <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/">Home</Link></li>
            <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/kantin">kantin</Link></li>
            <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/about">about</Link></li>
            {loggedIn ? (
              <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to='/profile'>profile</Link></li>
            ) : (
              <>
                <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/login">login</Link></li>
                <li><Link className="duration-500 md1:scale-105 px-5 hover:text-[#FC3535]" to="/signin">sign in</Link></li>
              </>
            )}
        </div>
    </ul>
   
    <div className="pr-5 pl-2">
            <img className={`sun w-[25px] md1:w-[35px] cursor-pointer ${isDarkTheme ? '' : 'display-none'}`} src={sun} alt="qwerw"/>
            <img className={`moon w-[25px] md1:w-[35px] cursor-pointer ${isDarkTheme ? 'display-none' : ''}`}  src={moon} alt="were"/>
    </div>
    
</nav>
                
            <Outlet/>
        </>
    )
}








export default Navbar ;