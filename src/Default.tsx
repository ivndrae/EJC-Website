import { useNavigate } from 'react-router-dom';
import logo2 from './assets/logos/own_logo/logo.jpg'
import { ReactNode, useState } from 'react';
import { useTranslation } from "react-i18next";


const Default = ({ children }: { children?: ReactNode[] | ReactNode }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  //setting up translation button 
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
};
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => { setIsOpen(e.target.checked) }} />
      <div className="drawer-content">
        <div className="h-full w-full bg-[#121212] flex flex-col min-h-screen min-w-fit select-none pt-14 lg:pt-32">
          <div className="flex flex-col w-full">
            {(() => {
              if (children == null || (Array.isArray(children) && children.length === 0)) {
                return (
                  <div className="flex mt-32 justify-center">
                    <div className="flex flex-col">
                      <div className=" text-white text-4xl md:text-8xl italic font-black text-center tracking-widest font-['Lato']">
                        COMING SOON!
                      </div>
                      <div className="flex text-white text-lg md:text-xl text-center mt-5 font-['KoHo'] tracking-wider">
                        We are currently preparing something special for you. Stay tuned and check back for more!
                      </div>
                    </div>
                  </div>
                );
              }
              return children;
            })()}
          </div>
        </div>
        <div className="fixed top-0 left-0 z-50 flex w-full bg-[#121212]">
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full items-center justify-between gap-4 pl-2 pr-2">
              <button className="flex items-center" onClick={() => navigate("/home")}>
                <img className="flex w-8 h-8 md:w-12 md:h-12 ml-2 mt-2" src={logo2} />
                <div className="flex ml-3 mt-2 text-lg md:ml-6 md:text-2xl text-white font-bold font-['JetBrains_Mono']"> ENCODE CANADA </div>
              </button>
              <label htmlFor="my-drawer-4" className="flex mt-4 w-22 drawer-button btn bg-none border-none lg:hidden">
                <svg
                  className={`fill-white h-8 w-8 ${isOpen ? "hidden" : "block"}`}
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
              <div className="hidden lg:flex justify-between p-4">
                <div className="hidden lg:flex items-center pt-2 text-white">
                  <a className="flex w-14 h-14 items-center justify-center" href="https://www.instagram.com/encodecanada/"><i className="bi bi-instagram text-3xl"></i></a>
                  <a className="flex w-14 h-14 items-center justify-center" href="https://twitter.com/EncodeCanada"><i className="bi bi-twitter-x text-3xl"></i></a>
                  <a className="flex w-14 h-14 items-center justify-center" href="https://www.facebook.com/encodejustice/"><i className="bi bi-facebook text-3xl"></i></a>
                  <a className="flex w-14 h-14 items-center justify-center" href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><i className="bi bi-linkedin text-3xl"></i></a>
                  <a className="flex w-14 h-14 items-center justify-center" href="mailto:encodejusticecanada@gmail.com"><i className="bi bi-envelope-fill text-3xl"></i></a>
                </div>
             
                {/* Line Separator */}
                <div className="h-15 w-[2px] bg-white mx-4"></div>
                
                {/* Language Toggle Button */}
                <button 
                  onClick={toggleLanguage} 
                  className="text-white font-bold italic text-lg border border-white px-2 py-0.5 rounded hover:bg-white hover:text-black transition"
                >
                  {language === "en" ? "FR" : "EN"} {/* Still working on the mechanics of this */}
                </button>
              </div>
            </div>
            <div className="hidden lg:flex navbar-end bg-[#8C1616] justify-center w-full ">
              <div className="flex justify-center gap-32 text-white font-bold italic ">
              <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white text-lg font-bold bg-transparent border-none hover:underline hover:underline-offset-2 hover:bg-transparent">about us</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content z-[1] w-max bg-[#8C1616] border-b border-x">
                    <li><a className="underline underline-offset-4" onClick={() => navigate("/about")}>What is Encode?</a></li>
                    <li><a className="underline underline-offset-4" onClick={() => navigate("/team")}> Meet Our Team</a></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover px-6">
                  <div tabIndex={0} role="button" className="m-1 btn text-white italic text-lg font-bold bg-transparent border-none hover:underline hover:underline-offset-2 hover:bg-transparent">Our Work</div>
                  <ul tabIndex={0} className="p-2 menu dropdown-content z-[1] w-max bg-[#8C1616] border-b border-x">
                    <li><a className="underline underline-offset-4" onClick={() => navigate("/newsletter")}>Newsletter</a></li>
                    <li><a className="underline underline-offset-4" onClick={() => navigate("/podcast")}>Podcast</a></li>
                    <li><a className="underline underline-offset-4" onClick={() => navigate("/publications")}>Publications</a></li>
                    <li><a className="underline underline-offset-4" onClick={() => navigate("/interviews")}>Interviews</a></li>
                  </ul>
                </div>
                <button className="font-bold italic text-xl hover:border rounded-md px-4" onClick={() => navigate("/events")}>EVENTS</button>
                <button className="font-bold italic text-xl hover:border rounded-md px-4" onClick={() => navigate("/resources")}>RESOURCES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#212125] text-base-content">
          <div className="flex flex-col items-end pt-12">
            <div
              className={`w-full block flex-grow lg:flex lg:items-end lg:w-auto ${isOpen ? "block" : "hidden"}`}
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

export default Default
