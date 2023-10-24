import { useNavigate } from 'react-router-dom';
import ig from './assets/instagram.svg'
import twt from './assets/twitter.svg'
import fb from './assets/facebook.svg'
import ln from './assets/linkedin.svg'
import mail from './assets/mail.svg'
import logo2 from './assets/logo.jpg'

function Resources() {
    const navigate = useNavigate();
    return (

        <div className="h-screen w-full bg-black flex flex-col">
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <button className="flex items-center" onClick={() => navigate("/home")}>
                        <img className="flex w-12 h-12 " src={logo2} />
                        <div className="flex ml-6 text-white text-2xl font-bold font-['JetBrains_Mono']"> ENCODE JUSTICE CANADA </div>
                    </button>
                    <div className="flex items-center">
                        <a href="https://www.instagram.com/encodecanada/"><img className="flex w-8 mr-5 " src={ig} /></a>
                        <a href="https://twitter.com/EncodeCanada"><img className="flex w-11 mr-2" src={twt} /></a>
                        <a href="https://www.facebook.com/encodejustice/"><img className="flex w-12 mr-1" src={fb} /></a>
                        <a href="https://www.linkedin.com/company/encode-justice-canada/?trk=organization_guest_main-feed-card-text"><img className="flex w-16 mr-1.5" src={ln} /></a>
                        <a href="mailto:encodejusticecanada@gmail.com"><img className="flex w-11 mr-1" src={mail} /></a>
                    </div>
                </div>
            </div>

            <div className="p-0">
                <div className="bg-[#982216] w-full h-14">
                    <div className="flex justify-center gap-32 text-white font-bold italic ">
                        <details className="dropdown">
                            <summary className="m-1 btn text-white text-xl font-bold bg-transparent border-none rounded">About us</summary>
                            <ul className="p-2 menu dropdown-content z-[1] rounded-box w-60 bg-black">
                                <li><a onClick={() => navigate("/about")}>What is Encode Justice?</a></li>
                                <li><a onClick={() => navigate("/team")}>Meet Our Team</a></li>
                            </ul>
                        </details>
                        <details className="dropdown">
                            <summary className="m-1 btn text-white text-xl font-bold bg-transparent border-none rounded">Our Work</summary>
                            <ul className="p-2 menu dropdown-content z-[1] rounded-box w-60 bg-black">
                                <li><a onClick={() => navigate("/publications")}>Publications</a></li>
                            </ul>
                        </details>
                        <details className="dropdown">
                            <summary className="m-1 btn text-white text-xl font-bold bg-transparent border-none rounded">Events</summary>
                            <ul className="p-2 menu dropdown-content z-[1] rounded-box w-60 bg-black">
                                <li><a>Speaker Series</a></li>
                                <li><a>Workshops</a></li>
                                <li><a>Hackathons</a></li>
                            </ul>
                        </details>
                        <button className="font-bold italic text-xl border-none hover:bg-black rounded-md py-0.5 px-4" onClick={() => navigate("/resources")}>RESOURCES</button>
                    </div>
                </div>

                <div className="p-6"></div>
                <div className="flex mt-32 justify-center">
                    <div className="flex flex-col">
                        <div className="text-white text-8xl italic font-black text-center tracking-widest font-['Lato']">
                            COMING SOON!
                        </div>
                        <div className="text-white text-xl text-center mt-5 font-['KoHo'] tracking-wider">
                            Our website is currently under construction... Content will be made available soon, thank you for your patience!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources