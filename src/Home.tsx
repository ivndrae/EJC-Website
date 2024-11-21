import { useNavigate } from 'react-router-dom';
import logo from './assets/logos/own_logo/EJC_White_Clear.svg';
import './index.css';
import { useState } from 'react';


function Home() {
  const navigate = useNavigate();
  const [isOpenHamburg, setIsOpenHamburg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
  <>
    <input id="hamburg" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpenHamburg(e.target.checked) }} />
    <input id="about_us_menu" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked) }} />
    
      <div className= "bg-[#A6242F] absolute w-full h-[10rem]"></div>
      <div className="min-h-[100vh] w-full inset-0 bg-[#A6242F] flex flex-col select-none mb-[50vh] rounded-[5rem] relative z-20 overflow-x-hidden">
        <nav id='' className="lowercase absolute top-0 w-full p-7 sm:flex">
          <div className='flex justify-between'>
            <span>logo?</span>
            <div>
              <label htmlFor='hamburg' className='text-[#f2f2f2bb] text-4xl hover:text-white focus:text-white focus:outline-none sm:hidden'><i className="bi bi-list "></i></label>
            </div>
          </div>
          <div className={`text-[#f2f2f2bb] text-2xl flex justify-end py-3 absolute right-[-50px]  ${isOpenHamburg ? 'block duration-700' : 'translate-x-[100%] duration-700'} sm:flex sm:right-0 sm:translate-x-0 sm:duration-0 z-50`}>
            <div className='w-full sm:flex bg-[#8C1616]'>
              <div className='relative sm:px-12'>

                <label htmlFor='about_us_menu' className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-0 hover:cursor-pointer'>about us</label>
                <div className={`sm:absolute sm:px-0 ${isOpen ? 'block' : 'hidden'}`}>
                  {/* <label htmlFor='about_us_menu' className='fixed bg-green-200 h-full w-full right-0 left-0 top-0 bottom-0'></label> */}
                  <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-0 hover:cursor-pointer ' onClick={() => navigate("/about")}>who we are</div>
                  <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-0 hover:cursor-pointer' onClick={() => navigate("/team")}>meet our team</div>
                </div>
              </div>
              
              <div className='relative sm:px-12'>
                <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-0 hover:cursor-pointer'>our work</div>
                <div className='sm:absolute'>
                  <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-0 hover:cursor-pointer' onClick={() => navigate("/podcast")}>podcast</div>
                  <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-0 hover:cursor-pointer' onClick={() => navigate("/publications")}>publications</div>
                </div>
              </div>
              
              
              <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-12 hover:cursor-pointer' onClick={() => navigate("/events")}>events</div>
              <div className='block hover:bg-[#8C1616]  hover:text-white focus:text-white focus:outline-none px-10 pr-36 pb-2 sm:px-12 hover:cursor-pointer' onClick={() => navigate("/resources")}>resources</div>
              
            </div>
          </div>
        </nav>

        <div className=" flex-col container mx-auto p-5 justify-center">
          <div className="sm:flex items-center justify-center mt-[20vh]">
            <img className="w-[10rem] rotate-2 mx-auto sm:ml-0 sm:mr-10 mb-7" src={logo} />
            <div className="flex flex-col">
              <p className="text-[#f2f2f2] text-5xl font-black text-center tracking-wider font-['Lato']">
                encode justice<br/>
                <span className="relative w-[max-content] font-mono
                  before:absolute before:inset-0 before:animate-typewriter
                before:bg-[#A6242F]
                  after:absolute after:inset-1 after:w-[0.125em] after:animate-caret
                after:bg-[#f2f2f2]">
                  canada
                </span>
              </p>
              <p className=" text-[#f2f2f2] text-lg text-center mt-5 font-['KoHo']">
                Fighting for Justice in the age of Artificial Intelligence.
              </p>
            </div>
          </div>
          <div className="relative w-full text-[#f2f2f2] max-w-screen-md mt-[50vh] ">
            <p className="text-[#f2f2f2] text-[2.5rem] leading-none sm:text-5xl font-bold">
              We are the Canadian Chapter of Encode Justice
            </p>
            <p className="text-2xl leading-10">
              Encode Justice is a global, youth-led organization that fights for human rights accountability and justice under AI. Harnessing a global network of volunteers from all over the world, we champion informed AI policy and encourage youth to confront the challenges of the age of automation through political advocacy, community organizing, educational programming, and content creation.
            </p>
          </div>
          <div className="flex sm:justify-between">
            <span></span>
            <p className="lg:text-right text-[#f2f2f2] lg:w-[50vw] mt-[60vh] text-2xl leading-10">
              <span className="text-[2rem] sm:text-4xl font-bold"> Our mission </span> is to promote AI literacy and ethics among Gen Z. We create educational resources, and host events such as our Speaker Series, Hackathons ,etc. for students and professionals to collaborate, with challenge, and inspire each other.
            </p>
          </div>
          <div className=" mt-[30vh]">
            <div className="text-[#f2f2f2] text-[2.5rem] sm:text-5xl font-bold text-center">
              We've Worked With
            </div>
            <div>partners</div>
          </div>
        </div>
      </div>
      <footer className=" border-4 border-green-200 bg-[#8C1616] fixed bottom-0 right-0 w-full h-[60vh] pt-36 px-5 md:px-20 z-10 text-[#F2BBBB]">
        <div className="border-4 border-yellow-200 text-[2rem] md:text-[2.75rem] font-bold">Let's get to know each<br/> other <span className="italic">better</span></div>
        <div className="border-4 border-blue-200 flex">        
          <div className="border-4 border-blue-200 md:w-[33.33%] mt-[5%] h-0">
            <div className='flex space-x-[12%] text-4xl'>
              <a href="https://www.instagram.com/encodecanada/"><i className="bi-instagram font-thin hover:text-[#f2f2f2]"></i></a>

              <a className=' fill-current hover:text-[#f2f2f2]' href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><svg className='w-10 fill-current' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512"><path d="M116.5 500.2V170.7H7v329.5h109.5zM61.8 125.7c38.1 0 62-25.4 62-57-.8-32.3-23.9-57-61.3-57-37.5 0-62 24.7-62 57 0 31.6 23.8 57 60.5 57h.8zM177 500.2s1.5-298.6 0-329.5h109.6v47.7h-.8c14.4-22.4 40.4-55.5 99.5-55.5 72 0 126.1 47.1 126.1 148.3v189H402V324c0-44.3-15.9-74.5-55.5-74.5-30.3 0-48.3 20.4-56.2 40-3 7-3.6 17-3.6 26.8v184H177z" clipRule="evenodd"/></svg></a>
              <a href="https://twitter.com/EncodeCanada"><i className=" bi-twitter-x hover:text-[#f2f2f2]"></i></a>
              {/* <a href="https://www.facebook.com/encodejustice/"><i className="bi-facebook text-4xl"></i></a>
              <a href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi-linkedin text-4xl"></i></a> */}
              <a className="w-14 h-14" href="https://www.facebook.com/encodejustice/"><svg className='w-10 fill-current hover:text-[#f2f2f2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" xmlSpace="preserve"><path d="M81.7 165.1h34V305a5 5 0 0 0 5 5h57.6a5 5 0 0 0 5-5V165.8h39a5 5 0 0 0 5-4.5l6-51.5a5 5 0 0 0-5-5.5h-45V72c0-9.8 5.2-14.7 15.6-14.7h29.4a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5h-42.4c-7 0-31.5 1.4-50.8 19.2a53.3 53.3 0 0 0-17.7 47.3v37.8H81.7a5 5 0 0 0-5 5V160a5 5 0 0 0 5 5z"/></svg></a>
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