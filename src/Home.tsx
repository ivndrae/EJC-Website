import { useNavigate } from 'react-router-dom';
import logo from './assets/EJC_White_Clear.svg';
import { useState } from 'react';
import { useEffect, useRef } from "react";

function Content() {
  const animationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (animationRef.current) {
        const rect = animationRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true); // Trigger the animation when section is in view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

    <div className= "bg-[#A6242F] relative -z-20" >
      <div className="min-h-[100vh] w-full inset-0 bg-[#A6242F] p-7 flex flex-col select-none mb-[50vh] rounded-[5rem]">
        <div className=" flex-col flex-1 container mx-auto p-5 justify-center">
          <div className=" flex items-center justify-center mt-[20%]">
            <img className=" flex w-[10rem] lg:w-[10rem] rotate-2 mr-10 mb-7" src={logo} />
            <div className="flex flex-col">
              <p className="text-white text-5xl lg:text-6xl  font-black text-center tracking-wider font-['Lato'] ">
                encode justice<br/> 
                <span className="relative w-[max-content] font-mono
before:absolute before:inset-0 before:animate-typewriter
before:bg-[#A6242F]
after:absolute after:inset-1 after:w-[0.125em] after:animate-caret
after:bg-white">
                  canada
                </span>
              </p>
              <p className=" text-white text-lg lg:text-xl text-center md:mt-5 font-['KoHo'] ">
                Fighting for Justice in the age of Artificial Intelligence.
              </p>
            </div>
          </div>
        <div className="relative w-full text-white max-w-screen-md mt-[50vh]">
          <p className="text-white text-5xl md:text-5xl font-bold">
            We are the Canadian Chapter of Encode Justice
          </p>
          <p className="text-2xl leading-10">
            Encode Justice is a global, youth-led organization that fights for human rights accountability and justice under AI. Harnessing a global network of volunteers from all over the world, we champion informed AI policy and encourage youth to confront the challenges of the age of automation through
            political advocacy, community organizing, educational programming, and content creation.
          </p>
        </div>
        <div className="flex justify-between">
          <span></span>
          <p className="text-right text-white w-[50vw] mt-[60vh] text-2xl leading-10">
            <span className="text-4xl font-bold"> Our mission </span> is to promote AI literacy and ethics among Gen Z. We create educational resources, and host events such as our Speaker Series, Hackathons ,etc. for students and professionals to collaborate, with challenge, and inspire each other.
          </p>
        </div>
        <div className=" mt-[30vh]">
          <div className="text-white text-5xl md:text-5xl font-bold text-center">
            Our Partners
          </div>
          <div>partners</div>
        </div>
      </div>
    
    <div>
    <div className="border-blue-100 border-4 fixed bottom-0 right-0 text-white bg-[#b33f3f] -z-10 w-full h-[60vh] pt-36 px-20">
      <div className="text-white text-[2.75rem] md:text-[2.75rem] font-bold">
        Let's get to know each<br/> other <span className="italic">better</span>
      </div>
        <div className="border-yellow-300 border -2 flex w-full">
            <a className="flex w-14 h-14 items-center justify-center" href="https://www.instagram.com/encodecanada/"><i className="bi bi-instagram text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="https://twitter.com/EncodeCanada"><i className="bi bi-twitter-x text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="https://www.facebook.com/encodejustice/"><i className="bi bi-facebook text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi bi-linkedin text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="mailto:encodejusticecanada@gmail.com"><i className="bi bi-envelope-fill text-4xl"></i></a>
          <div className="flex justify-center text-white font-['JetBrains_Mono']">
            Join our Slack!
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </>
  )
}
let lastScrollY = 0
const navbar = document.querySelector('nav')
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY
  if(currentScrollY > lastScrollY){
    console.log('scroll Down')
    navbar?.setAttribute("id", "hidden")
    // navbar?.classList.add('hidden')
  } else{
    console.log('scroll Up')
    navbar?.removeAttribute("id")
    // navbar?.classList.remove('hidden')
  }
  lastScrollY = currentScrollY
})

function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked) }} />
      <div className="drawer-content">
        <nav id='' className="lowercase fixed top-0 right-0 z-10 lg:flex">
          <div className="flex flex-col items-end m-2">
            <div
              className={` w-full flex-grow lg:flex lg:items-end lg:w-auto bg-transparent ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-sm text-white font-bold p-4 lg:flex-grow ">
                <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white text-lg bg-transparent border-none lowercase">about us</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content z-[1] rounded w-max bg-[#121212] shadow">
                    <li><a onClick={() => navigate("/about")}>Who We Are</a></li>
                    <li><a onClick={() => navigate("/team")}>Meet Our Team</a></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white text-lg bg-transparent border-none lowercase">Our Work</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content z-[1] rounded w-max bg-[#121212] shadow">
                    <li><a onClick={() => navigate("/newsletter")}>Newsletter</a></li>
                    <li><a onClick={() => navigate("/podcast")}>Podcast</a></li>
                    <li><a onClick={() => navigate("/publications")}>Publications</a></li>
                    <li><a onClick={() => navigate("/interviews")}>Interviews</a></li>
                  </ul>
                </div>
                <button className="m-1 btn bg-transparent  text-white text-lg border-none hover:bg-[#121212] rounded-md px-6 lowercase" onClick={() => navigate("/events")}>EVENTS</button>
                <button className="m-1 btn bg-transparent text-white text-lg border-none hover:bg-[#121212] rounded-md px-6 lowercase" onClick={() => navigate("/resources")}>RESOURCES</button>
              </div>
            </div>
          </div>
        </nav>
        <Content />
        <label htmlFor="my-drawer-4" className="fixed flex right-0 top-0 z-10  mt-4 w-24 drawer-button btn bg-transparent border-none lg:hidden">
          <svg
            className={`fill-white h-10 w-10 bg-transparent ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-white h-8 w-8 bg-transparent ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full  bg-[#121212] text-base-content">
          <div className="flex flex-col items-end m-2">
            <div
              className={` w-full block flex-grow lg:flex lg:items-end lg:w-auto bg-transparent ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-sm text-white font-bold lg:flex-grow">
                <br></br>
                <text className="text-lg m-4 underline underline-offset-2">About Us</text>
                <button className="flex m-1 btn bg-transparent font-bold text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/about")}>&gt; Who We Are</button>
                <button className="flex m-1 btn bg-transparent font-bold text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/team")}>&gt; Meet Our Team</button>
                <br></br>
                <text className=" text-lg m-4 underline underline-offset-2">Our Work</text>
                <button className="flex m-1 btn bg-transparent font-bold text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/newsletter")}>&gt; Newsletter</button>
                <button className="flex m-1 btn bg-transparent font-bold  text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/publications")}>&gt; Publications</button>
                <button className="flex m-1 btn bg-transparent font-bold  text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/podcast")}>&gt; Podcast</button>
                <button className="flex m-1 btn bg-transparent font-bold text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/interviews")}>&gt; Interviews</button>
                <br></br>
                <button className="flex m-1 btn bg-transparent font-bold  text-white text-lg border-none hover:bg-black rounded-md px-6 underline underline-offset-2" onClick={() => navigate("/events")}>&gt; EVENTS</button>
                <br></br>
                <button className="flex m-1 btn bg-transparent font-bold text-white text-lg border-none hover:bg-black rounded-md px-6 underline underline-offset-2" onClick={() => navigate("/resources")}>&gt; RESOURCES</button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Home