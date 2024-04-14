import { FormEvent } from 'react';
import Default from './Default';

const scriptURL = 'https://script.google.com/macros/s/AKfycbxr7wlZr-Gwb6kGEHshGmrwN5fNxhDBGrhK4aTWGTIO6_EnHQGGa_kEcJmxKDuuVnuHHg/exec'

function onFormSubmit(event: FormEvent) {
  event.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(event.target as HTMLFormElement) })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Your form is submitted successfully.")
        window.location.reload();
      } else {
        alert(`Could not submit form data: ${response.status}`)
      }
    })
    .catch(error => console.error('Error!', error.message))
}

function Newsletters( volume: string, link: string) {
  return (
    <div className="collapse collapse-arrow odd:bg-[#1E1E20] even:bg-[#1A1A1B]">
    <input type="checkbox" className="peer" />
    <div className="collapse-title text-primary-content peer-checked:bg-red-800 peer-checked:text-secondary-content">
     {volume}
    </div>
    <div className="collapse-content text-primary-content peer-checked:bg-red-800 peer-checked:text-secondary-content">
    <iframe src={link} height="800px" width="100%" />
    </div>
  </div>
  )
}

function Newsletter() {
  return (
    <Default>
      <div className="flex flex-col lg:flex-row pt-6">
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-6 lg:pl-20">
          <div className="text-white text-4xl font-bold tracking-wide font-['Lato'] text-center">
            Want to stay up to date with our content and events?
          </div>
          <div className="text-white text-xl mt-5 font-['KoHo'] tracking-wider text-center">
            Join our mailing list to receive our weekly newsletter. You’ll get access to exciting AI news from the week, insights on innovative research and events in Montreal, as well as some other educational resources!
          </div>
        </div>

        <div className='flex justify-center lg:pl-24 w-full lg:w-auto mt-4 lg:mt-0'>
          <div className="flex mt-5 bg-[#222430] p-5 lg:p-8 rounded-lg justify-center gap-2 text-white lg:mr-8">
            <form method="post" action="" name="contact-form" onSubmit={onFormSubmit}>
              <div className="flex flex-col gap-4">
                <h4 className="lg:text-3xl text-xl font-bold italic font-['Lato']">SIGN UP FOR OUR MAILING LIST!</h4>
                <div>
                  <div>Name (First, Last):</div>
                  <input className="w-full h-7 placeholder:text-gray-500 bg-[#323234]" type="text" name="Name" placeholder="e.g. John Smith" />
                </div>
                <div>
                  <div>Email address:</div>
                  <input className="w-full h-7 placeholder:text-gray-500 bg-[#323234]" type="text" name="Email" placeholder="example@encodejustice.ca" />
                </div>
                <div>
                  <div>Message:</div>
                  <textarea className="w-full h-32 placeholder:text-gray-500 bg-[#323234]" name="Message" placeholder="Anything you'd like us to know e.g. events ideas, topics of interest, desire to get involved with our team,etc." />
                </div>
                <div className='flex justify-center'>
                  <input className="flex justify-center italic font-bold text-xl w-1/2 bg-red-600 bg-opacity-40 lg:w-1/3 h-9 border border-red-700 drop-shadow-lg" type="submit" value="SUBSCRIBE" id="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" flex mt-5 ml-5 mb-2 text-white font-['Lato'] font-bold italic text-lg lg:text-3xl underline underline-offset-4 pt-5">
        VIEW SOME OF OUR PAST NEWSLETTERS:
      </div>
      <div className=" font-mono font-bold md:text-xl text-center">
        {Newsletters("VOL. 1 : AI Ethics Unleashed!", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=aeda36a1a0")}
        {Newsletters("VOL. 2 : Decoding AI Ethics!", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=9e42e1d7fe")}
        {Newsletters("VOL. 4 : New Horizons!", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=81938f0327")}
        {Newsletters("VOL. 5 : AI Innovation Dilemmas", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=5161e165d8")}
        {Newsletters("VOL. 7 : EJC Wrapped", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=c58486726f")}
        {Newsletters("VOL. 8 : Reflections, Resolutions, and Responsible Innovation", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=0c06d663b6")}
        {Newsletters("VOL. 12 : Join our Slack Community!", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=ef1647673b" )}
        {Newsletters("VOL. 16 : Milestone Achievements", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=dbe0d4bf92")}
        {Newsletters("VOL. 17: Spotlight on Policymakers","https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=99cc27a1ea")}
        {Newsletters("VOL. 19 : Total Eclipse", "https://us21.campaign-archive.com/?u=e794d084cccdb0c0cf51b425e&id=b148d0ccfe")}
      </div>
      
    </Default>
  )
}

export default Newsletter