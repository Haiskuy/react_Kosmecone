import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2";
import { useState,useEffect} from 'react';

import axios from 'axios'


export default function Signin(){
    //check darkmode
    const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);
    //api signin
    const [formData, setFormData] = useState({
        user_name: '',
        phone: '',
        address: '',
        password: '',
        class: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handlesubmit = (e) => {
        e.preventDefault();
        // Send the form data to the backend
        axios.post('http://localhost:8000/user', formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error sending data:', error);
          });
      };
    return(
        <>
        <div className="bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50">
        <Navbar2    />
        
        <header
        className="grid grid-rows-1 md1:grid-cols-2 text-center mx-3 my-10 border-[0.5px] rounded-xl border-zinc-600 items-center shadow-2xl  ">
        <div
            className="hidden md1:block bg-red-700 w-[100%] rounded-l-2xl h-[100%] bg-[url('../asset/regist.jpg')] bg-center bg-no-repeat">
        </div>
        <form className="text-left bg-zinc-50 dark:bg-zinc-800 rounded-lg px-5  mt-11 py-3 dark:text-zinc-50"  onSubmit={handlesubmit}>
            <div className="text-5xl font-bold ">Register</div>
            <div className="text-[#9f9f9f] md1:text-xl mt-1">
                isi data diri dengan jujur dan teliti dalam mengisinya
            </div>

            <div className="grid grid-cols-2">
                <div className="pr-3">
                    {/* <!-- nama --> <br/> */}
                    <label htmlFor="nama">Nama Lengkap :</label>
                    <br/>
                    <input placeholder="Riski Saputra Junior"
                        className="w-[100%] md1:h-[45px] pb-1 bg-[#BFBFBF] mt-1 rounded-md text-zinc-900 px-2 py-1 " type="text"
                        name="user_name" id="nama" value={formData.user_name} onChange={handleChange}/>
                </div>

                <div className="pl-3">
                    {/* <!-- nomor --> <br/> */}
                    <label className="" htmlFor="wa">nomor Wa :</label>
                    <br/>
                    <input placeholder="088273477723"
                        className="w-[100%] md1:h-[45px] pb-1 bg-[#BFBFBF] mt-1 rounded-md text-zinc-900 px-2 py-1 " type="number"
                        name="phone" id="wa" value={formData.phone} onChange={handleChange}/>
                </div>
            </div>


            <br/>
            {/* <!-- kelas --> */}
            <label htmlFor="kelas">Asal Kelas :</label>
            <br/>
            <input placeholder="XI PPLG 2" className="w-[100%] md1:h-[45px] pb-1 bg-[#BFBFBF] mt-1 rounded-md text-zinc-900 px-2 py-1 "
                type="text" name="class" id="kelas" value={formData.class} onChange={handleChange}/>
            <br/><br/>
            {/* <!-- alamat --> */}
            <label htmlFor="alamat">Alamat Lengkap :</label>
            <textarea placeholder="Desa, Kecamatan, Kabupaten/Kota"
                className="w-[100%] md1:h-[45px] pb-1 bg-[#BFBFBF] mt-1 rounded-md text-zinc-900 px-2 py-1 " type="text" name="address"
                id="alamat" rows="4" value={formData.address} onChange={handleChange}></textarea>
            <br/><br/>
            {/* <!-- password --> */}
            <label htmlFor="pw1">Password :</label>
            <input placeholder="NDJWI02EJ02EKF9JS"
                className="w-[100%] md1:h-[45px] pb-1 bg-[#BFBFBF] mt-1 rounded-md text-zinc-900 px-2 py-1 " type="password" name="password"
                id="pw1" value={formData.password} onChange={handleChange}/>
            <br/><br/>
            {/* <!-- konfirmasi password --> */}
            <label className="  " htmlFor="pw2">Konfirmasi Password :</label>
            <input placeholder="NDJWI02EJ02EKF9JS"
                className="w-[100%] md1:h-[45px] pb-1 bg-[#BFBFBF] mt-1 rounded-md text-zinc-900 px-2 py-1 " type="password" name="pw2"
                id="pw2"/>


            <br/>
            <button
                className="w-[100%] rounded-lg py-3 text-xl font-bold mt-5 text-zinbg-zinc-50 duration-300 hover:border-[#888888] hover:text-black hover:bg-zinc-50 border-[0.5px] bg-gradasi1"
                type="submit" >Regist</button>
            <div className="text-[#9f9f9f] mt-6 text-center">Belum memiliki akun? daftar sekarang <Link
                    className="font-bold text-zinc-900 dark:text-zinc-100 " to="/login">
                    disini! </Link>

            </div>
        </form>




    </header>
    <div className="dark:bg-zinc-900 w-[5%]"><br />
    </div>
    </div>
        </>
    )
}