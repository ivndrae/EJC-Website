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

function Newsletter() {
  return (
    <Default>
      <div className="flex pt-6">
        <div className="flex flex-col justify-center w-1/2 p-6 pl-20">
          <div className="text-white text-4xl bold tracking-wide font-['Lato'] text-center">
            Want to stay up to date with our content and events?
          </div>
          <div className="text-white text-xl mt-5 font-['KoHo'] tracking-wider text-center">
            Join our mailing list to receive our weekly newsletter. You’ll get access to exciting AI news from the week, insights on innovative research and events in Montreal, as well as some other educational resources!
          </div>
        </div>
        <div className='flex justify-center pl-24'>
          <div className="flex mt-5 bg-[#222430] p-8 rounded-lg justify-center gap-2 text-white">
            <form method="post" action="" name="contact-form" onSubmit={onFormSubmit}>
              <div className="flex flex-col gap-4">
                <h4 className="text-3xl font-bold italic font-['Lato']">SIGN UP FOR OUR MAILING LIST!</h4>
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
                  <input className="flex justify-center italic font-bold text-xl bg-red-600 bg-opacity-40 w-1/3 h-9 border border-red-700 drop-shadow-lg" type="submit" value="SUBSCRIBE" id="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </Default>
  )
}

export default Newsletter