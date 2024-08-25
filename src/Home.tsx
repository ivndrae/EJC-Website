import { useNavigate } from 'react-router-dom';
import logo from './assets/EJC_White_Clear.svg';
import { useState } from 'react';

function Content() {
  return (
    <div className="h-full w-full fixed inset-0 bg-[#982216] p-7 flex flex-col select-none ">
      <div className="flex flex-1 container mx-auto p-5 justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center mb-2 gap-6 lg:gap-12">
          <img className="flex w-[11rem] lg:w-[15rem] animate-fadeIn rotate-2" src={logo} />
          <div className="flex flex-col">
            <p className=" text-white text-5xl md:text-6xl lg:text-8xl italic font-black text-center tracking-widest font-['Lato'] p-2 animate-fadeIn">ENCODE JUSTICE<br />CANADA</p>
            <p className=" text-white text-lg lg:text-xl text-center md:mt-5 font-['KoHo'] tracking-wider animate-fadeIn">Fighting for Justice in the age of Artificial Intelligence.</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full text-white p-4 m-1 flex items-center">
        <div className="flex flex-col w-full">
          <div className="flex gap-1 md:gap-3 justify-center items-center m-3">
            <a className="flex w-14 h-14 items-center justify-center" href="https://www.instagram.com/encodecanada/"><i className="bi bi-instagram text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="https://twitter.com/EncodeCanada"><i className="bi bi-twitter-x text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="https://www.facebook.com/encodejustice/"><i className="bi bi-facebook text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi bi-linkedin text-4xl"></i></a>
            <a className="flex w-14 h-14 items-center justify-center" href="mailto:encodejusticecanada@gmail.com"><i className="bi bi-envelope-fill text-4xl"></i></a>
          </div>
          <div className="flex justify-center text-white font-['JetBrains_Mono']">
            Connect with us!
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked) }} />
      <div className="drawer-content">
        <div className="fixed top-0 right-0 z-10 hidden lg:flex">
          <div className="flex flex-col items-end m-2">
            <div
              className={` w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-sm text-white font-bold italic p-4 lg:flex-grow">
                <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white italic text-lg font-bold bg-transparent border-none ">About us</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content z-[1] rounded w-max bg-[#121212] shadow">
                    <li><a onClick={() => navigate("/about")}>Who We Are</a></li>
                    <li><a onClick={() => navigate("/team")}>Meet Our Team</a></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white italic text-lg font-bold bg-transparent border-none">Our Work</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content z-[1] rounded w-max bg-[#121212] shadow">
                    <li><a onClick={() => navigate("/newsletter")}>Newsletter</a></li>
                    <li><a onClick={() => navigate("/podcast")}>Podcast</a></li>
                    <li><a onClick={() => navigate("/publications")}>Publications</a></li>
                    <li><a onClick={() => navigate("/interviews")}>Interviews</a></li>
                  </ul>
                </div>
                <button className="m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-[#121212] rounded-md px-6" onClick={() => navigate("/events")}>EVENTS</button>
                <button className="m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-[#121212] rounded-md px-6" onClick={() => navigate("/resources")}>RESOURCES</button>
              </div>
            </div>
          </div>
        </div>
        <Content />
        <label htmlFor="my-drawer-4" className="fixed flex right-0 top-0 z-10  mt-4 w-24 drawer-button btn bg-transparent border-none lg:hidden">
          <svg
            className={`fill-white h-10 w-10 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-white h-8 w-8 ${isOpen ? "block" : "hidden"}`}
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
              className={` w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-sm text-white font-bold italic lg:flex-grow">
                <br></br>
                <text className="text-lg m-4 underline underline-offset-2">About Us</text>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/about")}>&gt; Who We Are</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/team")}>&gt; Meet Our Team</button>
                <br></br>
                <text className=" text-lg m-4 underline underline-offset-2">Our Work</text>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/newsletter")}>&gt; Newsletter</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/publications")}>&gt; Publications</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/podcast")}>&gt; Podcast</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/interviews")}>&gt; Interviews</button>
                <br></br>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6 underline underline-offset-2" onClick={() => navigate("/events")}>&gt; EVENTS</button>
                <br></br>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6 underline underline-offset-2" onClick={() => navigate("/resources")}>&gt; RESOURCES</button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Home