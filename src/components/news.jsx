
import mockup from "./static/img/mockup2.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import pamflete from "./static/img/pamflet.jpg"
// Initialize AOS
AOS.init();
export default function News(){
    return(
        <>
        <div className="bg-[#3A3A3A] px-10 mt-32 pt-10 text-center">

            <div className="lg1:grid lg1:grid-cols-2 items-center mt-10">
                <div data-aos-duration="1200" data-aos="fade-up" className="text-zinc-50 my-6 lg1:my-5 lg1:ml-4 ml-0">
                    <div className="text-zinc-50 font-bold text-3xl lg1:text-6xl ">Berita Penting!!</div>
                    <div className="  font-light text-2xl md1:text-3xl lg1:text-4xl mt-4">
                        <span className="text-[#FC3535]">
                            FREE!!
                        </span>
                        daftarkan produkmu di website ini
                        untuk 25 orang pertama akan gratis selama 1 bulan
                        dengan cara klik tombol dibawah ini!!
                        <br/><br/>
                        <a href="KOSmecone-user/daftar.html">
                            <button
                                className="bg-zinc-50 text-zinc-90 duration-300 dark:text-zinc-900 px-4 py-2 lg1:px-5 rounded-lg hover:bg-transparent hover:border-zintext-zinc-50 hover:text-zinc-50 border-2 border-transparent">
                                daftar sekarang!
                            </button>
                        </a>
                        <br/><br/>
                        <span className="text-[#FC3535]"> Dukung
                            terus </span>kami dan para seller
                    </div>
                    <div className="text-2xl md1:text-3xl lg1:text-4xl">dengan membeli produk yang kami sediakan
                    </div>
                </div>
                <img data-aos-duration="1300" data-aos="fade-up" className=" w-[100%] px-10 lg1:pl-32" src={mockup}
                    alt=""/>
            </div>
        </div>

        {/* <!-- konten4 --> */}
        <div className="lg1:grid lg1:grid-cols-2 px-10 my-10 items-center">
        <div data-aos-duration="1500" data-aos="fade-up"
            className=" lg1:mr-4 mr-0 text-2xl md1:text-3xl lg1:text-4xl font-light dark:text-zinc-50 ">Kami akan selalu
            mengupdate produk
            setiap minggu nantikan produk produk yang menarik
            lainnya
            <br/><br/>
            Terimakasih telah berkunjung di website kami
        </div>
        <img data-aos-duration="1600" data-aos="fade-up" className="mt-10 " src={pamflete} alt=""/>
        </div>
                    
        
        
        </>
        
    )

}