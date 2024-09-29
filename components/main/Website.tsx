import Image from "next/image";
import { FaLink } from "react-icons/fa6";


const Website = () => {
  return (
    <div>
      <div className="screen-max-width mt-2 mx-auto text-white">
        <div className=" w-full flex flex-wrap justify-center gap-10 items-center">
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/asset 25.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/asset 26.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of In processing...
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">In processing...</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="#" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none text-white">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/asset 27.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/asset 28.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of In processing...
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">In processing...</div>
                      <div  className="text-[12px] flex items-center text-white bg-blue-500 font-semibold bg-blue px-3 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="#" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Website;
