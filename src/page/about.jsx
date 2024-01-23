
import Navbar1 from "../components/navbar1";
import alwan from "../components/static/img/anggota/alwan.png"
import haiban from "../components/static/img/anggota/haiban.png"
import abi from "../components/static/img/anggota/abi.png"
import salis from "../components/static/img/anggota/salis.png"
import ibnu from "../components/static/img/anggota/ibnu.png"
import moses from "../components/static/img/anggota/moses.png"
import { useState,useEffect} from 'react';
import Footer from "../components/footer";
import { Icon } from '@iconify/react';
import logo1 from "../components/static/img/logo/hyper131.png"
import logo2 from "../components/static/img/logo/s2.png"
import logo3 from "../components/static/img/logo/s1.png"
import 'aos/dist/aos.css'; // Import the AOS CSS
import Aos from "aos";

// Initialize AOS
Aos.init();



export default function About(){
    const [userTheme, setUserTheme] = useState(localStorage.getItem('Theme'));
    const [systemTheme, setSystemTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(userTheme === 'dark' || (!userTheme && systemTheme));

    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkTheme);
    }, [isDarkTheme]);
    return(
        <> 

             <div className="dark:bg-zinc-900 w-[100vw]">
                <Navbar1/>
                
                <header>
        <div className="dark:text-zinc-50 ml-10 mt-10 md1:mt-28 font-bold balo md1:text-2xl mb-16">
            SELAMAT DATANG DI
            <br/>
            <img src="http://localhost:8000/asset/1697905544044-ab.png" alt="" />
            <span className="text-4xl md1:text-6xl font-zinbg-zinc-900 ">
                KANTIN ONLINE
            </span>
            <br/>
            <span className="font-zinbg-zinc-900 text-5xl md1:text-7xl text-red-500">
                SMECONE
            </span>
        </div>
    </header>


            {/* <!-- KOSmecone --> */}
            <div className="justify-center pt-24  text-zinc-50 items-center bg-bottom bg-cover ">
                <div data-aos-duration="1000" data-aos="fade-up"
                    className="balo  mt-7 md1:mt-0 font-bold text-3xl md1:text-5xl lg1:text-6xl  text-center text-zinc-900 dark:text-zinc-50 ">
                    SMK Negeri 1 Purwokerto
                </div>
                <div data-aos-duration="1200" data-aos="fade-right">
                <iframe
                    className="w-[100%] h-[500px] lg1:h-[700px] mt-10"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3936252103554!2d109.25183477566804!3d-7.421615592588867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e96a7e3cc79%3A0x6d79bcd9709b4b6!2sSMK%20Negeri%201%20Purwokerto!5e0!3m2!1sid!2sid!4v1697133098494!5m2!1sid!2sid"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            {/* <!--  -->

            <!-- kami --> */}
            <div className="pt-24 text-lg md1:text-2xl text-center dark:text-zinc-50">
                <div data-aos-duration="1000" data-aos="fade-up"
                    className="balo  mt-7 md1:mt-0 font-bold text-3xl md1:text-5xl lg1:text-6xl  ">
                    Tentang Kami
                </div>
                <div className="px-8 lg:flex items-center">
                    <div data-aos-duration="1200" data-aos="fade-up" className="mt-5 font-light  ">
                        Websitre ini dibuat oleh siswa XI PPLG 2 oleh Alwan, Haiban, Ibnu, Abimanyu, Salis, Moses
                        </div>
                </div>
            </div>

            <div className="md1:grid-cols-2 grid xl1:grid-cols-3 items-center md1:mt-10 lg1:px-16 px-2 gap-4 ">
                {/* <!-- alwan --> */}
                <div data-aos-duration="1000" data-aos="fade-up"
                    className=" flex items-center bg-zinc-100 dark:bg-zinc-700  dark:border-zinc-50 border dark:text-zinc-50 mt-5 md1:1:mt-0 md1:mx-5 rounded-lg w-[100%] px-5 py-3 shadow-lg">
                    <img className="h-[90px] md1:h-[120px] lg1:h-[155px]" src={alwan} alt=""/>
                    <div className="text-left ml-4 ">
                        <div className=" text-xl lg1:text-2xl">Hafiz <span className="font-bold"> Alwan</span> Susilo</div>
                        <div className="text-base text-zinc-400 lg1:text-xl">Front End Dev of KOSmecone</div>
                        <div className="flex items-center mt-3">
                            <a target="_blank" href="https://www.instagram.com/zzls__/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:instagram"></Icon>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/artworkhex">
                                <Icon className="mx-4 scale-[200%] hidden xl1:block" icon="devicon:facebook"></Icon>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/alwans/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:linkedin"></Icon>
                            </a>
                            <a target="_blank" href="https://github.com/artworkhex?tab=repositories">
                                <Icon className="mx-4 scale-[200%] hidden lg1:block"
                                    icon="grommet-icons:github"></Icon>
                            </a>
                            <a target="_blank" href="https://github.com/alwan9?tab=repositories">
                                <Icon className="mx-4 scale-[200%]" icon="grommet-icons:github"></Icon>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- haiban --> */}
                <div data-aos-duration="800" data-aos="fade-up"
                    className="flex items-center bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-50 border mt-5 md1:1:mt-0 md1:mx-5 rounded-lg w-[100%] px-5 py-3 shadow-lg">
                    <img className="h-[90px] md1:h-[120px] lg1:h-[155px]" src={haiban} alt=""/>

                    <div className="text-left ml-4 ">
                        <div className=" text-xl lg1:text-2xl"> <span className="font-bold">Haiban</span> Aufa Arahman </div>
                        <div className="text-base text-zinc-400 lg1:text-xl">Back End Dev of KOSmecone</div>
                        <div className="flex items-center mt-3">
                            <a target="_blank" href="https://www.instagram.com/haiskuy13/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:instagram"></Icon>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/haiban-irwanov-4132a7272/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:linkedin"></Icon>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- ibnu --> */}
                <div data-aos-duration="1000" data-aos="fade-up"
                    className="flex items-center bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-50 border mt-5 md1:1:mt-0 md1:mx-5 rounded-lg w-[100%] px-5 py-3 shadow-lg">
                    <img className="h-[90px] md1:h-[120px] lg1:h-[155px]" src={ibnu} alt=""/>

                    <div className="text-left ml-4 ">
                        <div className=" text-xl lg1:text-2xl"> <span className="font-bold">Ibnu </span> Fathurrohman </div>
                        <div className="text-base text-zinc-400 lg1:text-xl"> Anggota of KOSmecone</div>
                        <div className="flex items-center mt-3">
                            <a target="_blank" href="https://www.instagram.com/ibnnn09/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:instagram"></Icon>
                            </a>

                        </div>
                    </div>
                </div>

                {/* <!-- abi --> */}
                <div data-aos-duration="1000" data-aos="fade-up"
                    className="flex items-center bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-50 border mt-5 md1:1:mt-0 md1:mx-5 rounded-lg w-[100%] px-5 py-3 shadow-lg">
                    <img className="h-[90px] md1:h-[120px] lg1:h-[155px]" src={abi} alt=""/>

                    <div className="text-left ml-4 ">
                        <div className=" text-xl lg1:text-2xl"> <span className="font-bold"> Abimanyu</span> Arya L.</div>
                        <div className="text-base text-zinc-400 lg1:text-xl">Anggota of KOSmecone</div>
                        <div className="flex items-center mt-3">
                            <a target="_blank" href="https://www.instagram.com/abimanyuarya.l/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:instagram"></Icon>
                            </a>
                            <a target="_blank" href="https://aryamsk30@gmail.com">
                                <Icon className="mx-4 scale-[200%]" icon="ic:baseline-mark-email-read"></Icon>
                            </a>

                        </div>
                    </div>
                </div>
                {/* <!-- moses --> */}
                <div data-aos-duration="800" data-aos="fade-up"
                    className="flex items-center bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-50 border mt-5 md1:1:mt-0 md1:mx-5 rounded-lg w-[100%] px-5 py-3 shadow-lg">
                    <img className="h-[90px] md1:h-[120px] lg1:h-[155px]" src={moses} alt=""/>

                    <div className="text-left ml-4 ">
                        <div className=" text-xl lg1:text-2xl"> Eliezer<span className="font-bold"> Moses</span> </div>
                        <div className="text-base text-zinc-400 lg1:text-xl">Anggota of KOSmecone</div>
                        <div className="flex items-center mt-3">
                            <a target="_blank" href="https://www.instagram.com/eliezermoses.__/">
                                <Icon className="mx-4 scale-[200%]" icon="skill-icons:instagram"></Icon>
                            </a>

                        </div>
                    </div>
                </div>
                {/* <!-- salis --> */}
                <div data-aos-duration="1000" data-aos="fade-up"
                    className="flex items-center bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-50 border mt-5 md1:1:mt-0 md1:mx-5 rounded-lg w-[100%] px-5 py-3 shadow-lg">
                    <img className="h-[90px] md1:h-[120px] lg1:h-[155px]" src={salis} alt=""/>

                    <div className="text-left ml-4 ">
                        <div className=" text-xl lg1:text-2xl">Riski <span className="font-bold">Salis </span> R. </div>
                        <div className="text-base text-zinc-400 lg1:text-xl"> Anggota of KOSmecone</div>
                        <div className="flex items-center mt-3">

                        </div>
                    </div>
                </div>
            </div>

            
            <div className="pt-24 text-3xl text-center">
                <div data-aos-duration="1000" data-aos="fade-up"
                    className="dark:text-zinc-50 balo mt-52 md1:mt-0 font-bold text-3xl md1:text-5xl lg1:text-6xl mb-10 ">
                    Support us
                </div>
                <div
                    className="grid grid-cols-1 items-center place-content-center md1:grid-cols-2   lg1:grid-cols-3 mt-16 px-10 lg1:px-12 md1:px-10 xl1:px-60">
                    <img data-aos-duration="1300" data-aos="fade-up" className=" duration-200 px-5 my-7 lg1:my-0 "
                        src={logo2} alt=""/>
                    <img data-aos-duration="1400" data-aos="fade-up" className=" duration-200 px-5 my-7 lg1:my-0 "
                        src={logo3} alt=""/>
                    <img data-aos-duration="1500" data-aos="fade-up" className=" duration-200 px-5 my-7 lg1:my-0 "
                        src={logo1} alt=""/>
                </div>
            </div>
            
            <footer className="mt-36 shadow-lg bg-zinc-800">
                <div className="md1:flex px-7 md1:px-10 py-20 dark:bg-zinc-800 bg-zinc-100 ">
                    <div className="lg1:w-[1100px] dark:text-zinc-50 text-zinc-900 ">
                        <img className="h-[40px] dark:block hidden" src="/asset/logo/white.png" alt=""/>
                        <img className="h-[40px] block dark:hidden" src="/asset/logo/dark.png" alt=""/>
                        <div className=" lg1:text-2xl mt-5 ">Website ini di buat bertujuan untuk membantu para siswa berdagang di
                            lingkungan
                            smecone dan
                            menumbuhkan jiwa kewirausahaan, kemandirian serta belajar tentang tanggung jawab
                        </div>

                    </div>
                    <form name="kirim-komentar"
                        action="https://script.google.com/macros/s/AKfycbz5D0g8FfpKGAYDVQo3gJGUeDBBDKvLqncovBi2mWLPWwcZBuN7tNpHe7JZ1c3yrZUIvA/exec"
                        className="md1:px-10 w-[100%] ">
                        <div className="font-bold text-3xl mt-20 md1:mt-0 text-zinc-900 dark:text-zinc-50">Anonimouse Komentar</div>
                        <div className="dark:text-zinc-50 text-zinc-900">Berikan kami kritik jika anda tidak suka, berikan kami
                            saran untuk memperbaiki sistem yang kami buat untuk kedepannya. Kami selalu menerima saran
                            kritikannya </div>
                        {/* <!-- nama --> */}
                        <div className="relative pt-4 w-[100%] field mt-5">
                                <input type="input" id="Nsiswa" name="Nama"
                                    className="form__field  bg-transparent w-[100%] pt-2 text-zinc-900 dark:text-zinc-50  "
                                    placeholder="Name" required="required"/>
                                <label htmlFor="name" className="form__label">Nama / Samaran</label>
                        </div>
                        {/* <!-- email -->
                        <!-- <div className="relative pt-4 w-[100%] field mt-10">
                            <input type="email" id="email" name="Email"
                                className="form__field  bg-transparent w-[100%] pt-2 text-zinc-900 dark:text-zinc-50 "
                                placeholder="Email" required="required">
                            <label for="email" className="form__label">email</label>
                        </div> --> */}
                        <div className="relative pt-4 w-[100%] field mt-10">
                            <textarea type="text" name="Pesan"
                                className="form__field   bg-transparent w-[100%] pt-2 text-zinc-900 dark:text-zinc-50 "
                                placeholder="pesan" required="required"></textarea>
                            <label htmlFor="pesan" className="form__label">Pesan / Saran / Kritik</label>
                        </div>
                        {/* <!-- submit --> */}
                        <button id="kirim" className="bg-gradasi1 rounded-lg w-[100%] h-[40px] mt-10 text-zinc-50 "
                            type="submit">Kirim</button>
                    </form>






                </div>
                <Footer/>
            </footer>   
                </div>
                
         
        </>
    )
}