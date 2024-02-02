import Default from './Default';
import { useNavigate } from 'react-router-dom';


function About() {
  const navigate = useNavigate();
  return (
    <Default>
      <section>
        <div className="bg-black text-white ">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className=" text-red-800 uppercase tracking-loose font-bold">About us</p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-bold font-['Lato']">We are the Canadian Chapter of Encode Justice</p>
              <p className="text-sm md:text-base text-gray-50 mb-4 font-['KoHo']">
                Encode Justice is a global, youth-led organization that fights for human rights accountability and justice under AI. Harnessing a global network of volunteers from all over the world, we champion informed AI policy and encourage youth to confront the challenges of the age of automation through
                political advocacy, community organizing, educational programming, and content creation. <br />  <br />
                Our mission is to promote AI literacy and ethics among Gen Z. We create educational resources, and host events such as our Speaker Series, Hackathons ,etc. for students and professionals to collaborate, with challenge, and inspire each other.
              </p>
              <a href="https://encodejustice.org/"
                className="bg-transparent mr-auto hover:bg-red-800 text-red-800 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-800 hover:border-transparent">
                Learn More</a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="absolute h-full" style={{ right: '50%' }}>
                    <div className="= border-red-800 h-full border-2 rounded-full"></div>
                  </div>

                  <div className="absolute h-full" style={{ left: '50%' }}>
                    <div className=" border-red-800 h-full border-2 rounded-full"></div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline animate-fadeIn">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-red-800">July 2020</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">The Beginning</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Encode Justice was founded by Sneha Revanur as a youth-powered movement for human-centered artificial intelligence.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-red-800">June 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">New Chapter</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Sara Parker founded Encode Justice Canada - the Canadian Chapter of Encode Justice.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-red-800"> August 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Recognition</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Encode Justice Canada was a semi-finalist in the Youth Impact Challenge and was awarded a grant.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-red-800">October 2021</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Collaboration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        EJC partnered with the McGill Artificial Intelligence Society to host an AI & Society workshop at the MAIS Hacks 2021.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-red-800"> March 2022</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Publication</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        EJC published its first brief with the Montreal AI Ethics Institue, titled "Who's watching? What you need to know about personal data security". <br/>
                        Click <a onClick={() => navigate("/publications")}className="link link-error">here</a> to see more of our publications.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-red-800">October 2022</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">First Hackathon</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      EJC hosted the Policy Track at MAIS Hacks 2022, Canada's largest AI Hackathon , in partnership with McGill AI Society.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-red-800">January 2023</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Speaker Series Launch</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      EJC hosted its inaugural Speaker Series : Wine-and-Cheese style conversations with local AI experts, featuring speakers from Mila, ReelyActive, and IBM, etc. 
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Default>
  )
}

export default About
