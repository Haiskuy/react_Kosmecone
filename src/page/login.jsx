import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../components/navbar2";
import { useState,useEffect, useRef} from 'react';
import axios from 'axios'
import { Authdata } from "../components/authwrapper";
import { Icon } from '@iconify/react';
import eyeIcon from '@iconify/icons-mdi/eye';
import eyeOffIcon from '@iconify/icons-mdi/eye-off';
export default function Login(){
    const navigate=useNavigate();
    const {login}=Authdata()
    const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));
    const [show,setshow]=useState(true)
    // password
  
    // const passwordInput = document.getElementById('password');
    // const showIcon = document.getElementById('eye-icon-show1');
    // const hideIcon = document.getElementById('eye-icon-hide1');
    // const showIcon = document.getElementById('eye-icon-show2');
    // const hideIcon = document.getElementById('eye-icon-hide2');
     
    
  
    const handlePassword = () => {
      // Access the elements using the ref
        setshow(!show)
 
    }
  





    
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);
    
    const [formData, setFormData] = useState({
        phone: '',   
        password: '',
      });


    const handleChange = (e) => {
        e.preventDefault();
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
    };

    const handlesubmit =async (e) => {
        e.preventDefault();
        // Send the form data to the backend
        // axios.post('http://localhost:8000/user/login', formData,{ withCredentials: true })
        //   .then((response) => {
        //     console.log(response.data);
        //     if (response.data.message!=='no data avalible'
        //     ) {
        //         // Redirect to the profile page
        //         console.log("login success")
        //         navigate('/');
        //     }
        //   })
        //   .catch((error) => {
        //     console.error('Error sending data:', error);
        //   });
        try {
            await login(formData)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
         
        
      };
    return(
        <>
        <div className="bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50">
   
        <Navbar2/>
   
    <header className="grid grid-cols-1 text-center px-5 md1:px-16 py-7 md1:py-20 ">
        <a href="index.html">
            <img src="asset/back.png" alt=""/>
        </a>
        <div
            className="md1:grid md1:h-[680px] md1:grid-cols-2 items-center bg-[#eeeeee] dark:bg-zinc-800  dark:border-zinc-700 border-[0.5px] rounded-xl border-zinc-300 shadow-2xl   ">
            <div
                className="bg-slate-800 w-[100%] h-[100%] pr-5  md1:rounded-l-xl bg-[url(../../asset/img2.jpg)] bg-no-repeat bg-cover bg-center ">
            </div>
            <div className="md1:p-5 md1:py-5 ">

                <div className="text-3xl font-bold mt-2 md1:mt-9 md1:text-5xl ">Login</div>
                <div className="text-[#9f9f9f] md1:text-xl md1:mt-3 ">
                    hanya tersedia untuk seorang penjual yang ingin mendaftarkan produknya ke dalam website
                </div>
                <form className="text-left mt-10 md1:mt-" action="" onSubmit={handlesubmit}>
                    <label className="mt-3 md1:text-xl " htmlFor="phone">phone :</label>
                    <br/>
                    <input
                        className="w-[100%] md1:h-[50px] bg-[#BFBFBF] mt-1 rounded-md px-2 py-1 md1:py-3 dark:text-zinc-900"
                        type="number"
                        name="phone" id="phone" value={formData.phone} onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label className="mt-3 md1:text-xl " htmlFor="pw">Password :</label>
                    <br/>
                    <div className="flex items-center"> 
                        <input
                            
                             
                            className="lg1:text-xl w-[100%] md1:h-[50px] bg-[#BFBFBF] mt-1 rounded-md px-2 py-1 md1:py-3 dark:text-zinc-900"
                            type={show ? "password" :"text" }
                            name="password"
                            id="pw"
                            value={formData.password}
                            onChange={handleChange}
                            autocomplete="off"
                        />
                        {console.log(show)}
                        <Icon
                            icon={show ? eyeOffIcon : eyeIcon}
                            
                            className={`text-zinc-900  absolute  right-9 cursor-pointer  lg1:right-28 scale-[150%] `}
                            onClick={handlePassword}
                        />
                    </div>
                    <input
                        className="w-[100%] rounded-lg mt-10 md1:mt-20 py-3 text-xl font-bold  text-white duration-300  hover:border-[#888888] hover:text-black hover:bg-white border-[0.5px] bg-gradasi1"
                        type="submit" value="Login"/>
                        
                    
                </form>
                <div className="mt-6 text-[#9f9f9f] md1:mt-4 pb-24 md1:pb-0">Belum memiliki akun? daftar sekarang <Link
                        className="font-bold text-zinc-800 dark:text-zinc-100 " to="/signIn">
                        disini! </Link>
                </div>
            </div>
        </div>

    </header>

    
</div>
        </>
    )
}