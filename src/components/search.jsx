


export default function Searchcom(){
    return(
        <>
        <div className=" ">
          {/* Search bar */}
          <div className="pt-10 px-5 lg1:px-14 hover:scale-[101%] duration-300">
            <div className="relative mb-4 flex flex-wrap items-stretch shadow-xl">
              <input
                id="searchInput"
                type="text"
                className="relative lg1:text-xl m-0 block w-[100%] h-[45px] lg1:h-[60px] rounded-lg px-3 py-2 lg1:px-6 bg-[#ffffff] text-[#000000] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-[#000] focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:placeholder:text-[#6c6c6c] dark:focus:border-primary"
                placeholder="Produk yang anda cari ...."
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <a href="#">
                <span className="absolute right-0 text-zinc-50 space-nowrap rounded-s-lg dark:text-neutral-200 px-3 py-2" id="basic-addon2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7 lg1:h-10 lg1:w-10 fill-[#6c6c6c]">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          </div>
        
        
        </>




    )

}