

const Projects = () => {

  return (
    <div>
      <div className='screen-max-width flex flex-col mt-10'>
           <div className='flex flex-col justify-center'>     
           <div className="select-none mt-4 w-11/12 mx-auto text-[12px] font-bold text-white text-center px-4 sm:px-0 tracking-[0.3rem]">EXPLORE MY PROJECTS</div>
            <div className="w-full justify-center flex mt-5 flex-col items-center">
            <span className="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#7928ca] to-[#000000]"></span>
            <div className="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full flex items-center justify-center text-black text-md font-bold">2</div>
            <div id="projects" className="select-none bg-gradient-to-r from-[#7928ca] to-[#ff0080] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text dancing-font">My Projects</div>
            <div className="mt-6 font-[700] text-[2rem] text-white sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center">Showcasing my creative journey</div>
            <div className="mt-10 text-[#cccccc] text-2xl sm:text-3xl dancing-font py-4">Fullstack Projects</div>
            </div>
           </div>
           
                
           </div>
      </div>

     

      

  )
}

export default Projects