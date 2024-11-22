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
    
      <div className= "bg-[#A6242F] absolute w-full h-[10rem] z-20"></div>
      <div className="min-h-[100vh] w-full inset-0 bg-[#A6242F] flex flex-col select-none mb-[60vh] sm:mb-[50vh] rounded-[5rem] relative z-20 overflow-x-hidden">
        <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked); } } />
      <nav className="drawer-content">
        <div className="top-0 right-0 z-10 hidden md:flex absolute">
          <div className="flex flex-col items-end m-2">
            <div
              className={` w-full block flex-grow md:flex md:items-end md:w-auto bg-transparent ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-white font-bold md:flex-grow lowercase space-x-12 m-4">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn text-white text-lg tracking-wider font-bold bg-transparent border-none lowercase hover:text-[#a6242f] hover:bg-[#f2f2f2]">About us</div>
                  <ul tabIndex={0} className="menu dropdown-content rounded w-max bg-transparent">
                    <li><a className='hover:text-[#a6242f] hover:bg-[#f2f2f2] text-lg tracking-wider' onClick={() => navigate("/about")}>Who We Are</a></li>
                    <li><a className='hover:text-[#a6242f] hover:bg-[#f2f2f2] text-lg tracking-wider' onClick={() => navigate("/team")}>Meet Our Team</a></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="m-1 btn text-white text-lg tracking-wider font-bold bg-transparent border-none lowercase hover:text-[#a6242f] hover:bg-[#f2f2f2]">Our Work</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content rounded w-max bg-transparent">
                    <li><a className='hover:text-[#a6242f] hover:bg-[#f2f2f2] text-lg tracking-wider' onClick={() => navigate("/podcast")}>Podcast</a></li>
                    <li><a className='hover:text-[#a6242f] hover:bg-[#f2f2f2] text-lg tracking-wider' onClick={() => navigate("/publications")}>Publications</a></li>
                  </ul>
                </div>
                <button className="m-1 btn bg-transparent font-bold text-white text-lg border-none hover:text-[#a6242f] hover:bg-[#f2f2f2] rounded-md px-6 lowercase tracking-wider" onClick={() => navigate("/events")}>EVENTS</button>
                <button className="m-1 btn bg-transparent font-bold text-white text-lg border-none hover:text-[#a6242f] hover:bg-[#f2f2f2] rounded-md px-6 lowercase tracking-wider" onClick={() => navigate("/resources")}>RESOURCES</button>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="my-drawer-4" className="fixed flex right-0 top-0 z-10  mt-4 w-24 drawer-button btn bg-transparent border-none md:hidden selection:outline-none">
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
      </nav>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#8c1616] text-base-content relative z-50">
          <div className="flex flex-col items-end p-2">
            <div
              className={` w-full block flex-grow ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-xl text-[#f2f2f2] font-bold md:flex-grow mt-20 space-y-4">
                <br></br>
                <text className="hover:cursor-default pl-8">about us</text>
                <div className="pl-16 py-2 hover:cursor-pointer hover:text-[#a6242f] hover:bg-[#f2f2f2] rounded" onClick={() => navigate("/about")}>who we are</div>
                <div className="pl-16 py-2 hover:cursor-pointer hover:text-[#a6242f] hover:bg-[#f2f2f2] rounded" onClick={() => navigate("/team")}>meet our team</div>
                <br></br>
                <text className="hover:cursor-default pl-8">our work</text>
                <div className="pl-16 py-2 hover:cursor-pointer hover:text-[#a6242f] hover:bg-[#f2f2f2] rounded" onClick={() => navigate("/podcast")}>podcast</div>
                <div className="pl-16 py-2 hover:cursor-pointer hover:text-[#a6242f] hover:bg-[#f2f2f2] rounded" onClick={() => navigate("/publications")}>publications</div>

                <br></br>
                <div className="hover:cursor-pointer hover:text-[#a6242f] hover:bg-[#f2f2f2] pl-8 py-2 rounded" onClick={() => navigate("/events")}>events</div>
                <br></br>
                <div className="hover:cursor-pointer hover:text-[#a6242f] hover:bg-[#f2f2f2] pl-8 py-2 rounded" onClick={() => navigate("/resources")}>resources</div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>

        <div className=" flex-col container mx-auto p-5 justify-center sm:pt-[10vh]">
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
          <div className="w-full text-[#f2f2f2] max-w-screen-md mt-[50vh] ">
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
      <footer className=" bg-[#8C1616] fixed bottom-0 right-0 w-full h-full pt-32 md:pt-36 px-5 md:px-20 z-10 text-[#F2BBBB]">
        <div className='absolute bottom-0 mb-12'>
          <div className="tracking-wider leading-8 md:leading-[3rem] text-center md:text-left text-[2.25rem] md:text-[2.75rem] font-bold mb-10 md:mb-0">Let's get to know each<br className='hidden md:block'/> other <span className="italic">better</span></div>
          <div className=" space-y-7 flex flex-col sm:flex-row">        
            <div className="md:w-[33.33%] mt-[5%] items-center">
              <div className='flex space-x-[12%] text-[2rem] md:text-4xl items-center justify-center sm:justify-start'>
                <a href="https://www.instagram.com/encodecanada/"><i className="bi-instagram font-thin hover:text-[#f2f2f2]"></i></a>
                <a className=' fill-current hover:text-[#f2f2f2]' href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><svg className='w-9 md:w-10 fill-current' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512"><path d="M116.5 500.2V170.7H7v329.5h109.5zM61.8 125.7c38.1 0 62-25.4 62-57-.8-32.3-23.9-57-61.3-57-37.5 0-62 24.7-62 57 0 31.6 23.8 57 60.5 57h.8zM177 500.2s1.5-298.6 0-329.5h109.6v47.7h-.8c14.4-22.4 40.4-55.5 99.5-55.5 72 0 126.1 47.1 126.1 148.3v189H402V324c0-44.3-15.9-74.5-55.5-74.5-30.3 0-48.3 20.4-56.2 40-3 7-3.6 17-3.6 26.8v184H177z" clipRule="evenodd"/></svg></a>
                <a href="https://twitter.com/EncodeCanada"><i className=" bi-twitter-x hover:text-[#f2f2f2]"></i></a>
                {/* <a href="https://www.facebook.com/encodejustice/"><i className="bi-facebook text-4xl"></i></a>
                <a href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi-linkedin text-4xl"></i></a> */}
                <a className=" w-9 md:w-10" href="https://www.facebook.com/encodejustice/"><svg className='w-10 fill-current hover:text-[#f2f2f2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" xmlSpace="preserve"><path d="M81.7 165.1h34V305a5 5 0 0 0 5 5h57.6a5 5 0 0 0 5-5V165.8h39a5 5 0 0 0 5-4.5l6-51.5a5 5 0 0 0-5-5.5h-45V72c0-9.8 5.2-14.7 15.6-14.7h29.4a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5h-42.4c-7 0-31.5 1.4-50.8 19.2a53.3 53.3 0 0 0-17.7 47.3v37.8H81.7a5 5 0 0 0-5 5V160a5 5 0 0 0 5 5z"/></svg></a>
              </div>
              <a className="text-[1.2rem] md:text-[1.35rem] hover:text-[#f2f2f2] flex text-center" href="mailto:encodejusticecanada@gmail.com"><div className='m-auto sm:m-0'>encodejusticecanada@gmail.com</div></a>  
            </div>
            <div className="md:w-[33.33%] text-center md:m-auto text-[1.35rem] md:text-[1.75rem] md:pr-30 md:py-5">Join our <a className="hover:text-[#f2f2f2] hover:underline" href="">Slack!</a></div>
            <div className=' md:w-[33.33%] text-[1.25rem] md:text-[1.5rem] leading-6 px-3 md:px-7 mr-10'>
              Subscribe to our newsletter to stay connected with the latest updates from the Encode Justice community.
              <div className='flex space-x-4 pt-4'>
                <input type="text" placeholder='email address' className=' border-[#f2bbbb] bg-transparent placeholder-[#ffffff64] pl-4 rounded-full border-[3px] w-[80%] outline-none focus:border-white hover:border-white'/>
                <div className='border-[3px] border-[#f2bbbb] bg-[#f2bbbb] rounded-full w-[12.5%] text-center text-[#8C1616] hover:cursor-pointer hover:bg-[#f2f2f2] hover:border-[#f2f2f2]' onClick={() => navigate("/newsletter")}><i className="bi-arrow-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home