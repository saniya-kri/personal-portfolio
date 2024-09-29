import Fullstack from "@/components/main/Fullstack";
import Language from "@/components/main/Language";
import Nav from "@/components/main/Nav";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Website from "@/components/main/Website";
import Footer from "@/components/main/Footer";


export default function Home() {
  return (
    <main className="bg-[#030014] w-full h-full overflow-x-hidden overflow-y-hidden">
       <div className="flex flex-col gap-20">
          <Nav/>
          <Skills/>
          <Language/>
          <Projects/>
          <Website/>
          <Fullstack/>
          < Footer/>
       </div>
    </main>
  );
}
