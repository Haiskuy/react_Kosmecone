import { Link } from "react-router-dom";

export default function Navbar1(){
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
    return(
        <>
        <nav id='menu' className="relative flex items-center z-50 w-[100vw] bg-zinc-50 m-">
        
        <div id="back" className="text-xl pl-10 text-center lg1:hidden right-0 cursor-pointer pr-2 ">
            <Link className=" duration-300 hover:text-gradasi1 text-zinc-900 dark:text-zinc-50 " to={''}><span className="font-bold">
                    KOS</span>MECONE
            </Link>
        </div>
        <input type='checkbox' id='responsive-menu' onClick={()=>updatemenu}/><label></label>
        <ul className="justify-center flex text-zinc-50 z-40 absolute">
            <div className="">

                <li><Link className="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        to='/'>home</Link></li>
                <li><Link className="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        to='/kantin'>kantin</Link></li>
                <li><Link className="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        to='/about'>about</Link></li>
                <li><Link className="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        to='/login'>login</Link>
                </li>
                <li><Link className="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        to='/signIn'>sign
                        in</Link></li>
                        <li><Link className="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        to='/profile'>profile
                        </Link></li>
            </div>
        </ul>

    </nav>





        {/* <nav id='menu' class="relative flex items-center z-50 lg1:mt-3 w-[100%] bg-zinc-50">
        
        <div id="back" class="text-xl pl-10 text-center lg1:hidden right-0 cursor-pointer pr-2 ">
            <a class=" duration-300 hover:text-gradasi1 text-zinc-900 dark:text-zinc-50 "><span class="font-bold">
                    KOS</span>MECONE
            </a>
        </div>
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
        <ul class="justify-center flex text-zinc-50 z-40 absolute">
            <div class="">

                <li><a class="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        href='index.html'>home</a></li>
                <li><a class="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        href='kantin.html'>kantin</a></li>
                <li><a class="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        href='about.html'>about</a></li>
                <li><a class="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        href='Login.html'>login</a>
                </li>
                <li><a class="duration-500 md1:scale-105 px-5 md1:text-zinc-900 dark:text-zinc-50 hover:text-[#FC3535]"
                        href='signIn.html'>sign
                        in</a></li>
            </div>
        </ul>

    </nav> */}
        
        
        </>
    )
}