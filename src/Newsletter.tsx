import { FormEvent, useState } from 'react';
import Default from './Default';
import loading from './assets/progress_icon.svg';

const scriptURL = 'https://script.google.com/macros/s/AKfycbxr7wlZr-Gwb6kGEHshGmrwN5fNxhDBGrhK4aTWGTIO6_EnHQGGa_kEcJmxKDuuVnuHHg/exec'

function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    fetch(scriptURL, { method: 'POST', body: new FormData(event.target as HTMLFormElement) })
      .then(response => {
        if (response.ok) {
          alert("Thank you! Your are now subscribed to EJC's Newsletter.")
          window.location.reload();
        } else {
          alert(`Could not submit form data: ${response.status}`)
        }
      })
      .catch(error => console.error('Error!', error.message))
      .finally(() => setIsSubmitting(false))
  }

  // function Newsletters(volume: string, link: string) {
  //   return (
  //     <div className="collapse collapse-arrow odd:bg-[#1E1E20] even:bg-[#1A1A1B]">
  //       <input type="checkbox" className="peer" />
  //       <div className="collapse-title text-primary-content peer-checked:bg-red-800 peer-checked:text-secondary-content">
  //         {volume}
  //       </div>
  //       <div className="collapse-content text-primary-content peer-checked:bg-red-800 peer-checked:text-secondary-content">
  //         <iframe src={link} height="800px" width="100%" />
  //       </div>
  //     </div>
  //   )
  // }

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
          <div className="flex mt-5 bg-[#222430] p-5 lg:p-8 rounded-lg justify-center gap-2 text-white lg:mr-8 shadow-2xl shadow-stone-800">
            <form method="post" action="" name="contact-form" onSubmit={onFormSubmit}>
              <div className="flex flex-col gap-4">
                <h4 className="lg:text-3xl text-xl font-bold italic font-['Lato']">SIGN UP FOR OUR MAILING LIST!</h4>
                <div>
                  <div>Name (First, Last):</div>
                  <input className="rounded-md w-full h-7 p-2 placeholder:text-gray-500 bg-[#323234]" type="text" name="Name" placeholder="e.g. John Smith" />
                </div>
                <div>
                  <div>Email address:</div>
                  <input className="rounded-md w-full h-7 p-2 placeholder:text-gray-500 bg-[#323234]" type="text" name="Email" placeholder="example@encodejustice.ca" />
                </div>
                <div>
                  <div>Message:</div>
                  <textarea className="rounded-md w-full h-32 p-2 placeholder:text-gray-500 bg-[#323234]" name="Message" placeholder="Anything you'd like us to know e.g. events ideas, topics of interest, desire to get involved with our team,etc." />
                </div>

                {(() => {
                  if (isSubmitting) {
                    return <div className='flex justify-center'>
                      <button className={"flex rounded justify-center italic font-bold text-xl w-1/2 bg-red-600 bg-opacity-40 lg:w-1/3 h-9 border border-red-700 drop-shadow-2xl gap-2 items-center"} type="submit" id="submit">
                        <img className="animate-spin" src={loading}></img>
                      </button></div>
                  } else {
                    return <div className='flex justify-center'>
                      <button className={"flex rounded justify-center italic font-bold text-xl w-1/2 bg-red-600 bg-opacity-40 lg:w-1/3 h-9 border border-red-700 drop-shadow-2xl gap-2 items-center"} type="submit" id="submit">
                        SUBSCRIBE
                      </button>
                    </div>
                  }
                })()}

              </div>
            </form>
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Newsletter