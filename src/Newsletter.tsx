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
    <div className="collapse collapse-arrow odd:bg-base-200 even:bg-base-300">
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
                  <input className="w-full h-7 placeholder:text-gray-500" type="text" name="Name" placeholder="e.g. John Smith" />
                </div>
                <div>
                  <div>Email address:</div>
                  <input className="w-full h-7 placeholder:text-gray-500" type="text" name="Email" placeholder="example@encodejustice.ca" />
                </div>
                <div>
                  <div>Message:</div>
                  <textarea className="w-full h-32 placeholder:text-gray-500" name="Message" placeholder="Anything you'd like us to know e.g. events ideas, topics of interest, desire to get involved with our team,etc." />
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
        {Newsletters("VOL. 1 : AI Ethics Unleashed!", "http://eepurl.com/iB6V3I")}
        {Newsletters("VOL. 2 : Decoding AI Ethics!", "http://eepurl.com/iDiGtI")}
        {Newsletters("VOL. 3 : Discovering the AI Community!", "http://eepurl.com/iDRnMI")}
        {Newsletters("VOL. 4 : New Horizons!", "http://eepurl.com/iEfmQU")}
        {Newsletters("VOL. 5 : AI Innovation Dilemmas", "http://eepurl.com/iEQfyU")}
        {Newsletters("VOL. 6 : Conflicting Views", "http://eepurl.com/iFC9Cs")}
        {Newsletters("VOL. 7 : EJC Wrapped", "http://eepurl.com/iFC9Cs")}
        {Newsletters("VOL. 8 : Reflections, Resolutions, and Responsible Innovation", "http://eepurl.com/iH5LaQ")}
        {Newsletters("VOL. 9 : Rocky Regulations", "http://eepurl.com/iIwzZQ")}
        {Newsletters("VOL. 10 : Exploring New Frontiers", "http://eepurl.com/iIZNe6")}
      </div>
      
    </Default>
  )
}

export default Newsletter