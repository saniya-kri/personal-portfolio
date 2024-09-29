

import { GiPaperPlane } from "react-icons/gi";
import HeroContent from "../sub/HeroContent";

const Nav = () => {
  return (
        <div className='text-white w-full p-2'>
        <div className='w-11/12 mx-auto flex justify-between items-center p-2 border-b border-gray-800' id='nav'>
        <div className='text-2xl font-bold'>Anjali.Dev</div>
       <div className='btn'>
         <div className='flex items-center'> 
            <GiPaperPlane className='w-[15px] h-[15px]'/>
             <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'>Hire me</a> 
         </div>
       </div>
    </div>
    <HeroContent/>
   </div>
  )
}

export default Nav


