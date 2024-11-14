import { useNavigate } from 'react-router-dom';
import logo from './assets/EJC_White_Clear.svg';
import { useState } from 'react';

function Content() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className= "bg-[#A6242F] absolute w-full h-[10rem]"></div>
      <div className="min-h-[100vh] w-full inset-0 bg-[#A6242F] p-7 flex flex-col select-none mb-[50vh] rounded-[5rem] relative z-20">
        <nav id='' className="lowercase fixed top-0 right-0 p-4">
          <div className="flex items-end m-2">
            <div className='text-skin-muted'> hello </div>
            <div className={` w-full lg:flex ${isOpen ? "block" : "hidden"}`}>
              <div className="text-white font-bold ">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn text-white text-lg  border-none lowercase bg-inherit hover:bg-transparent hover:text-[]">
                    ABOUT US
                  </div>
                  <ul tabIndex={0} className="menu dropdown-content rounded w-max bg-[#A6242F]">
                    <li>
                      <a onClick={() => navigate("/about")}>
                        WHO WE ARE
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/team")}>
                        MEET OUR TEAM
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white text-lg bg-transparent border-none lowercase">
                    OUR WORK
                  </div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content rounded w-max bg-[#A6242F]">
                    <li>
                      <a onClick={() => navigate("/podcast")}>
                        PODCAST
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/publications")}>
                        PUBLICATIONS
                      </a>
                    </li>
                  </ul>
                </div>
                <button className="m-1 btn bg-transparent  text-white text-lg border-none hover:bg-[#121212] rounded-md px-6 lowercase" 
                  onClick={() => navigate("/events")}>
                  EVENTS
                </button>
                <button className="m-1 btn bg-transparent text-white text-lg border-none hover:bg-[#121212] rounded-md px-6 lowercase" 
                  onClick={() => navigate("/resources")}>
                  RESOURCES
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className=" flex-col flex-1 container mx-auto p-5 justify-center">
          <div className=" flex items-center justify-center mt-[20%]">
            <img className=" flex w-[10rem] lg:w-[10rem] rotate-2 mr-10 mb-7" src={logo} />
            <div className="flex flex-col">
              <p className="text-white text-5xl lg:text-6xl font-black text-center tracking-wider font-['Lato']">
                encode justice<br/>
                <span className="relative w-[max-content] font-mono
                  before:absolute before:inset-0 before:animate-typewriter
                before:bg-[#A6242F]
                  after:absolute after:inset-1 after:w-[0.125em] after:animate-caret
                after:bg-white">
                  canada
                </span>
              </p>
              <p className=" text-white text-lg lg:text-xl text-center md:mt-5 font-['KoHo']">
                Fighting for Justice in the age of Artificial Intelligence.
              </p>
            </div>
          </div>
          <div className="relative w-full text-white max-w-screen-md mt-[50vh] ">
            <p className="text-white text-5xl md:text-5xl font-bold">
              We are the Canadian Chapter of Encode Justice
            </p>
            <p className="text-2xl leading-10">
              Encode Justice is a global, youth-led organization that fights for human rights accountability and justice under AI. Harnessing a global network of volunteers from all over the world, we champion informed AI policy and encourage youth to confront the challenges of the age of automation through political advocacy, community organizing, educational programming, and content creation.
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
      </div>
      <div className=" bg-[#8C1616] fixed bottom-0 right-0 text-white  w-full h-[60vh] pt-36 px-20 z-10">
        <div className=" text-white text-[2.75rem] md:text-[2.75rem] font-bold">
          Let's get to know each<br/> other <span className="italic">better</span>
        </div>
        <div className="border-red-300 border-4 flex">        
          <div className="border-yellow-300 border-2 flex-col w-[33.33%]">
            <div>
              <a className="w-14 h-14" href="https://www.instagram.com/encodecanada/"><i className="bi-instagram text-4xl"></i></a>
              <a className="w-14 h-14" href="https://twitter.com/EncodeCanada"><i className=" bi-twitter-x text-4xl"></i></a>
              <a className="w-14 h-14" href="https://www.facebook.com/encodejustice/"><i className="bi-facebook text-4xl"></i></a>
              <a className="w-14 h-14" href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi-linkedin text-4xl"></i></a>
            </div>
            <a className="" href="mailto:encodejusticecanada@gmail.com">encodejusticecanada@gmail.com</a>  
          </div>
          <div className="border-blue-300 border-2 text-white font-['JetBrains_Mono'] w-[33.33%]">
            Join our <a href="">Slack!</a>
          </div>
          <div className='border-green-400 border-2 w-[33.33%]'>
            Subscribe to our newsletter to stay connected with the latest updates from the Encode Justice community.
            <div>
              <input type="text" placeholder='Email Address' className='bg-transparent border-white'/>
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
    <div className="drawer drawer-end relative z-60">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked) }} />
      <div className="drawer-content">
        
        <Content />
      </div>
    </div>
  )
}
export default Home