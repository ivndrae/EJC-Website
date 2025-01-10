import { useNavigate } from 'react-router-dom';
import logo from './assets/logos/own_logo/EJC_White_Clear.svg';
import { useState } from 'react';
import './index.css';
import maieiLogo from '/src/assets/logos/partners/MAIEI.png';
import mcgillAI from '/src/assets/logos/partners/mcgillAI.png'; 
import mila from '/src/assets/logos/partners/mila (black).png'; 
import Mutek from '/src/assets/logos/partners/MUTEK.png';
import womInRob from '/src/assets/logos/partners/Women in Robotics.png'; 
import Mcgill from '/src/assets/logos/partners/Mcgill.png';
import SACS from '/src/assets/logos/partners/SACS.png'; 
import B21 from '/src/assets/logos/partners/B21_logo-removebg-preview.png';


function Home() {
  return (
  <>
    {/* <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked) }} /> */}
      <div className= "bg-[#A6242F] absolute w-full h-[10rem]"></div>
      <div className="min-h-[100vh] w-full inset-0 bg-[#A6242F] flex flex-col select-none mb-[50vh] rounded-[5rem] relative z-20 overflow-x-hidden">
        <nav id='' className="lowercase absolute top-0 w-full p-7">
          <div className='flex justify-between'>
            <span></span>
            <div>
              <button className='text-[#f2f2f2bb] text-4xl hover:text-white focus:text-white focus:outline-none '><i className="bi bi-list "></i></button>
            </div>
          </div>
          <div className={"text-white text-2xl flex justify-end py-3 absolute right-[-50px] ${isOpen ? 'hidden' : 'block'}"}>
            <div className='w-full'>
              <a href="" className='block hover:bg-[#8C1616] px-10 pr-36 pb-2'>about us</a>
              <a href="" className='block hover:bg-[#8C1616] px-10 pr-36 pb-2'>our work</a>
              <a href="" className='block hover:bg-[#8C1616] px-10 pr-36 pb-2'>events</a>
              <a href="" className='block hover:bg-[#8C1616] px-10 pr-36 pb-2'>resources</a>
            </div>
          </div>
            {/* <div className=" text-[#f2f2f2] font-bold lowercase space-x-7 lg:space-x-12 ">
              <div className="dropdown dropdown-hover hover:bg-transparent">
                <div tabIndex={0} role="button" className="block btn text-[#f2f2f2] text-lg   lowercase bg-inherit  hover:text-[#A6242F] border-none focus:text-[#A6242F] focus:bg-gray-200">
                  ABOUT US
                </div>
                <ul tabIndex={0} className="menu dropdown-content rounded w-max bg-[#A6242F]">
                  <li>
                    <a className='hover:text-[#A6242F] hover:bg-gray-200'
                      onClick={() => navigate("/about")}>
                      WHO WE ARE
                    </a>
                  </li>
                  <li>
                    <a className='hover:text-[#A6242F] hover:bg-gray-200'
                      onClick={() => navigate("/team")}>
                      MEET OUR TEAM
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover px-6">
                <div tabIndex={0} role="button" className="btn text-[#f2f2f2] text-lg bg-transparent border-none lowercase hover:text-[#A6242F] hover:bg-gray-200 focus:text-[#A6242F] focus:bg-gray-200 block">
                  OUR WORK
                </div>
                <ul tabIndex={0} className="menu dropdown-content w-max bg-[#A6242F]">
                  <li>
                    <a 
                      className='hover:text-[#A6242F] hover:bg-gray-200'
                      onClick={() => navigate("/podcast")}>
                      PODCAST
                    </a>
                  </li>
                  <li>
                    <a 
                      className='hover:text-[#A6242F] hover:bg-gray-200'
                      onClick={() => navigate("/publications")}>
                      PUBLICATIONS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover px-6">
                <div tabIndex={0} role="button" className="block btn text-[#f2f2f2] text-lg bg-transparent border-none lowercase hover:text-[#A6242F] hover:bg-gray-200"
                onClick={() => navigate("/resources")}>
                  EVENTS
                </div>
              </div>
            
              <button className="block btn bg-transparent text-[#f2f2f2] text-lg border-none hover:text-[#A6242F] hover:bg-gray-200 lowercase" 
                onClick={() => navigate("/resources")}>
                RESOURCES
              </button>
            </div> */}
        </nav>
        <div className=" flex-col flex-1 container mx-auto p-5 justify-center">
          <div className=" flex items-center justify-center mt-[20%]">
            <img className=" flex w-[10rem] lg:w-[10rem] rotate-2 mr-10 mb-7" src={logo} />
            <div className="flex flex-col">
              <p className="text-[#f2f2f2] text-5xl lg:text-6xl font-black text-center tracking-wider font-['Lato']">
                encode justice<br/>
                <span className="relative w-[max-content] font-mono
                  before:absolute before:inset-0 before:animate-typewriter
                before:bg-[#A6242F]
                  after:absolute after:inset-1 after:w-[0.125em] after:animate-caret
                after:bg-[#f2f2f2]">
                  canada
                </span>
              </p>
              <p className=" text-[#f2f2f2] text-lg lg:text-xl text-center md:mt-5 font-['KoHo']">
                Fighting for Justice in the age of Artificial Intelligence.
              </p>
            </div>
          </div>
          <div className="relative w-full text-[#f2f2f2] max-w-screen-md mt-[50vh] ">
            <p className="text-[#f2f2f2] text-5xl md:text-5xl font-bold">
              We are the Canadian Chapter of Encode Justice
            </p>
            <p className="text-2xl leading-10">
              Encode Justice is a global, youth-led organization that fights for human rights accountability and justice under AI. Harnessing a global network of volunteers from all over the world, we champion informed AI policy and encourage youth to confront the challenges of the age of automation through political advocacy, community organizing, educational programming, and content creation.
            </p>
          </div>
         
          <div className="flex justify-between">
            <span></span>
            <p className="text-right text-[#f2f2f2] w-[50vw] mt-[60vh] text-2xl leading-10">
              <span className="text-4xl font-bold"> Our mission </span> is to promote AI literacy and ethics among Gen Z. We create educational resources, and host events such as our Speaker Series, Hackathons ,etc. for students and professionals to collaborate, with challenge, and inspire each other.
            </p>
          </div>
          <div className=" mt-[30vh]">

            <div className="text-[#f2f2f2] text-5xl md:text-5xl font-bold text-center">
              We've Worked With
            </div>
            <div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
  
            <a href="https://montrealethics.ai/">
              <img
                src={maieiLogo}
                alt="MAIEI Logo"
                className="hover:scale-125 transition-transform duration-500 w-72 h-auto mt-4 mb-10 sm:w-72  mx-auto"
              />
            </a>

            <a href="https://mutek.org/">
              <img
                src={Mutek}
                alt="Mutek Logo"
                className="hover:scale-125 transition-transform duration-500 w-72 h-auto mt-4 sm:ml-30 mt-2 w-72 mx-auto"
              />
            </a>

            <a href="https://www.womeninairobotics.de/">
              <img
                src={womInRob}
                alt="Women In Robotics Logo"
                className="hover:scale-125 transition-transform duration-500 w-100 h-auto mt-10 sm:ml-50 w-72 mx-auto"
              />
            </a>

            <a href="https://www.mcgill.ca/"  className="sm:col-span-2 sm:col-start-1">
              <img
                src={Mcgill}
                alt="McGill University Logo"
                className="hover:scale-125 transition-transform duration-500 w-72 h-auto mt-2 sm:w-72 mx-auto "
              />
            </a>

            <a href="https://www.building21.ca/" className="sm:col-span-2 sm:col-start-2">
              <img
                src={B21}
                alt="Building 21 logo"
                className="hover:scale-125 transition-transform duration-500 w-36 h-auto mt-2 sm:w-36 mt-0 mx-auto"
              />
            </a>
          </div>

          </div>
        </div>
      </div>
    </div>
      <footer className=" bg-[#8C1616] fixed bottom-0 right-0 w-full h-[60vh] pt-36 px-20 z-10 text-[#F2BBBB]">
        <div className="text-[2.75rem] md:text-[2.75rem] font-bold">Let's get to know each<br/> other <span className="italic">better</span></div>
        <div className="flex">        
          <div className=" w-[33.33%] m-auto">
            <div className='flex space-x-[12%]'>
              <a href="https://www.instagram.com/encodecanada/"><i className="bi-instagram text-4xl font-thin hover:text-[#f2f2f2]"></i></a>
              <a className=' fill-current hover:text-[#f2f2f2]' href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><svg className='w-10 fill-current' xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M116.5 500.2V170.7H7v329.5h109.5zM61.8 125.7c38.1 0 62-25.4 62-57-.8-32.3-23.9-57-61.3-57-37.5 0-62 24.7-62 57 0 31.6 23.8 57 60.5 57h.8zM177 500.2s1.5-298.6 0-329.5h109.6v47.7h-.8c14.4-22.4 40.4-55.5 99.5-55.5 72 0 126.1 47.1 126.1 148.3v189H402V324c0-44.3-15.9-74.5-55.5-74.5-30.3 0-48.3 20.4-56.2 40-3 7-3.6 17-3.6 26.8v184H177z" clip-rule="evenodd"/></svg></a>
              <a href="https://twitter.com/EncodeCanada"><i className=" bi-twitter-x text-4xl hover:text-[#f2f2f2]"></i></a>
              {/* <a href="https://www.facebook.com/encodejustice/"><i className="bi-facebook text-4xl"></i></a>
              <a href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi-linkedin text-4xl"></i></a> */}
              <a className="w-14 h-14" href="https://www.facebook.com/encodejustice/"><svg className='w-10 fill-current hover:text-[#f2f2f2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" xml:space="preserve"><path d="M81.7 165.1h34V305a5 5 0 0 0 5 5h57.6a5 5 0 0 0 5-5V165.8h39a5 5 0 0 0 5-4.5l6-51.5a5 5 0 0 0-5-5.5h-45V72c0-9.8 5.2-14.7 15.6-14.7h29.4a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5h-42.4c-7 0-31.5 1.4-50.8 19.2a53.3 53.3 0 0 0-17.7 47.3v37.8H81.7a5 5 0 0 0-5 5V160a5 5 0 0 0 5 5z"/></svg></a>
            </div>
            <a className="text-[1.35rem] hover:text-[#f2f2f2]" href="mailto:encodejusticecanada@gmail.com">encodejusticecanada@gmail.com</a>  
          </div>
          <div className=" w-[33.33%] text-center m-auto text-[1.75rem] pr-32">Join our <a className="hover:text-[#f2f2f2] hover:underline" href="">Slack!</a></div>
          <div className=' w-[33.33%] text-[1.5rem] mb-20 px-7'>
            Subscribe to our newsletter to stay connected with the latest updates from the Encode Justice community.
            <div className='flex space-x-4 pt-4'>
              <input type="text" placeholder='email address' className=' border-[#f2bbbb] bg-transparent placeholder-[#ffffff64] pl-4 rounded-full border-[3px] w-[80%] outline-none focus:border-white hover:border-white'/>
              <div className='border-[3px] border-[#f2bbbb] bg-[#f2bbbb] rounded-full w-[12.5%] text-center text-[#8C1616] hover:cursor-pointer hover:bg-[#f2f2f2] hover:border-[#f2f2f2]' onClick={() => navigate("/newsletter")}><i className="bi-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home