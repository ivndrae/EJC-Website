import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg'
import React, { useState } from 'react';

function Content() {
  return (
    <div className="h-full w-full fixed inset-0 bg-[#982216] p-7 flex flex-col select-none">
      <div className="flex flex-1 container mx-auto p-4 justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:ml-20 md:mb-20 ">
          <img className="flex w-48 lg:w-64 animate-fadeIn" src={logo} />
          <div className="lg:m-16">
            <p className=" text-white sm:text-3xl text-6xl md:text-8xl italic font-black text-center tracking-widest font-['Lato'] p-5 animate-fadeIn">ENCODE JUSTICE<br />CANADA</p>
            <p className=" text-white sm:text-lg text-xl text-center md:mt-5 font-['KoHo'] tracking-wider animate-fadeIn">Fighting for Justice in the age of Artificial Intelligence.</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full text-white p-4 m-1 flex items-center">
        <div className="flex flex-col w-full">
          <div className="flex gap-1 md:gap-3 justify-center">
            <a href="https://www.instagram.com/encodecanada/"><svg xmlns="http://www.w3.org/2000/svg" className="flex fill-current w-11 md:w-14" viewBox="0 0 24 24">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg></a>

            <a href="https://twitter.com/EncodeCanada"><svg className="flex fill-current w-11 md:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            </svg></a>

            <a href="https://www.facebook.com/encodejustice/"><svg xmlns="http://www.w3.org/2000/svg" className="flex fill-current w-11 md:w-14" viewBox="0 0 24 24">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></a>

            <a href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><svg className="flex fill-current w-11 md:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg></a>

            <a href="mailto:encodejusticecanada@gmail.com"><svg className="flex w-11 fill-current md:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg></a>
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
        <div className="fixed right-0 top-0 z-10 hidden lg:flex">
          <div className="flex flex-col items-end m-2">
            <div
              className={` w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-sm text-white font-bold italic p-4 lg:flex-grow">
                <details className="dropdown px-6">
                  <summary className="m-1 btn text-white italic text-lg font-bold bg-transparent border-none">About us</summary>
                  <ul className="p-2 menu dropdown-content z-[1] rounded-box w-max">
                    <li><a onClick={() => navigate("/about")}>What is Encode Justice?</a></li>
                    <li><a onClick={() => navigate("/team")}>Meet Our Team</a></li>
                  </ul>
                </details>
                <details className="dropdown px-6">
                  <summary className="m-1 btn text-white italic text-lg font-bold bg-transparent border-none">Our Work</summary>
                  <ul className="p-2 menu dropdown-content z-[1] rounded-box w-max">
                    <li><a onClick={() => navigate("/publications")}>Publications</a></li>
                    <li><a onClick={() => navigate("/newsletter")}>Newsletter</a></li>
                  </ul>
                </details>
                <button className="m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/events")}>EVENTS</button>
                <button className="m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/resources")}>RESOURCES</button>
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="flex flex-col items-end m-2">
            <div
              className={` w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
              <div className="text-sm text-white font-bold italic lg:flex-grow">
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/about")}>About Us</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/team")}>Meet Our Team</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/publications")}>Publications</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/newsletter")}>Newsletter</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/events")}>EVENTS</button>
                <button className="flex m-1 btn bg-transparent font-bold italic text-white text-lg border-none hover:bg-black rounded-md px-6" onClick={() => navigate("/resources")}>RESOURCES</button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default Home