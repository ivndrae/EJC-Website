import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg'
import ig from './assets/instagram.svg'
import twt from './assets/twitter.svg'
import fb from './assets/facebook.svg'
import ln from './assets/linkedin.svg'
import mail from './assets/mail.svg'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-[#982216] p-7 flex flex-col min-h-screen select-none">
      <div className="flex justify-end">

        <div className="flex gap-16 text-white font-bold italic ">
          <details className="dropdown">
            <summary className="m-1 btn text-white text-lg font-bold bg-transparent border-none">About us</summary>
            <ul className="p-2 menu dropdown-content z-[1] rounded-box w-60 bg-">
              <li><a onClick={() => navigate("/about")}>What is Encode Justice?</a></li>
              <li><a onClick={() => navigate("/team")}>Meet Our Team</a></li>
            </ul>
          </details>
          <details className="dropdown">
            <summary className="m-1 btn text-white text-lg font-bold bg-transparent border-none">Our Work</summary>
            <ul className="p-2 menu dropdown-content z-[1] rounded-box w-60 bg-">
              <li><a onClick={() => navigate("/publications")}>Publications</a></li>
              <li><a onClick={() => navigate("/newsletter")}>Newsletter</a></li>
            </ul>
          </details>
          <button className="font-bold italic text-lg border-none hover:bg-black rounded-md py-0.5 px-4" onClick={() => navigate("/events")}>EVENTS</button>
          <button className="font-bold italic text-lg border-none hover:bg-black rounded-md py-0.5 px-4" onClick={() => navigate("/resources")}>RESOURCES</button>
        </div>
      </div>
      <div className="flex mt-32 justify-center">
        <img className="flex w-70 mr-11" src={logo} />
        <div className="flex flex-col">
          <div className="text-white text-8xl italic font-black text-center tracking-widest font-['Lato']">
            ENCODE JUSTICE<br />CANADA
          </div>
          <div className="text-white text-xl text-center mt-5 font-['KoHo'] tracking-wider">
            Fighting for Justice in the age of Artificial Intelligence.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-auto">
        <a href="https://www.instagram.com/encodecanada/"><img className="flex w-8 mr-5" src={ig} /></a>
        <a href="https://twitter.com/EncodeCanada"><img className="flex w-11 mr-2" src={twt} /></a>
        <a href="https://www.facebook.com/encodejustice/"><img className="flex w-12 mr-1" src={fb} /></a>
        <a href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><img className="flex w-16 mr-1.5" src={ln} /></a>
        <a href="mailto:encodejusticecanada@gmail.com"><img className="flex w-11 mr-1" src={mail} /></a>
      </div>

      <div className="flex justify-center text-white font-['JetBrains_Mono']">
        Connect with us!
      </div>
    </div>
  )
}

export default Home
