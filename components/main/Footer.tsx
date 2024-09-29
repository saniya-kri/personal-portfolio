import Image from "next/image";
import { RiLinksFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="screen-max-width mx-auto p-10 mt-10">
        <div className="w-full justify-center flex mt-5 flex-col items-center text-white">
          <span className="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#ff4d4d] to-[#000000]"></span>
          <div className="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] rounded-full flex items-center justify-center text-black text-md font-bold">
            3
          </div>
          <div
            id="contacts"
            className="select-none bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text dancing-font"
          >
            My Contacts
          </div>
          <div className="mt-6 font-[700] text-[2rem] sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center">
            We are all connected
          </div>
          <div className="mt-5 text-[#cccccc] text-2xl font-cursive sm:text-4xl dancing-font">
            Let&apos;s Connect
          </div>

          <div className="mt-14">
            <div className="flex bg-purple-800 py-2 px-4 gap-2 cursor-pointer rounded-md items-center font-bold">
              <RiLinksFill />
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Contact me</a>
            </div>
          </div>

          <div className="mt-14 w-full flex justify-center">
            <Image
              src="/assets/images/af.png"
              alt="croco"
              width={300} // Set the appropriate width
              height={300} // Set the appropriate height
              // objectFit="cover" // Optional: adjust to your needs
            />
          </div>
        </div>
      </div>
      <center className="text-gray-100 p-2">Made with {'❤️'} Anjali © 2024</center>
    </div>
  );
};

export default Footer;



