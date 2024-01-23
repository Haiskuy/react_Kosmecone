import backw from "../components/static/img/back.png"
import backb from "../components/static/img/backB.png"


export default function Navbar2(){
    const goBack = () => {
        window.history.back();
      };
    return(<>
        <nav id='menu' className="flex justify-between px-7 md1:px-10 items-center   w-[100%] ">
        <div>
            <a href="#" onClick={goBack}>
                <img className="h-[30px] hidden dark:block" src={backw} alt="sdfg"/>
            </a>
            <a href="#" onClick={goBack}>
                <img className="h-[30px] block dark:hidden" src={backb} alt="dfgds"/>
            </a>
        </div>
     
        <a href="index.html">
            <div className=" duration-300 text-xl  text-gradasi1"><span className="font-bold">
                    KOS</span>MECONE
            </div>
        </a>
    </nav>
    
    
    </>)
}