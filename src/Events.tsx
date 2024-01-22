import Default from './Default';
import thumbnail from './assets/Tea&Talk.png';

function About() {
  return (
    <Default>
        <div className="pt-7 pl-6 text-2xl flex justify-center md:justify-start text-white italic font-black text-center tracking-widest font-['Lato']">UPCOMING EVENTS:</div>
        <div className="flex card ml-52 mb-16 mt-10 mr-52  md:card-side bg-base-100 shadow-xl w-auto ">
            <figure><img className="flex min-h-full min-w-full md:w-auto md:h-auto"src={thumbnail}></img></figure>
                <div className="flex card-body">
                    <h2 className="flex card-title font-['Lato'] text-white text-2xl">Tea & Talk: </h2>
                    <p className="flex font-['KoHo'] text-sm md:text-lg">Join us on January 24th at Building 21 (651 Sherbrooke St W) for Encode Justice's Tea & Talk at 5:30pm! ☕🤝 Dive into discussions on AI ethics and literacy. BYOM (Bring Your Own Mug) and your curiosity! 📱💻 Explore our engaging Tea & Talk articles available on our Resources page. Join our community for insightful discussions over a cup of tea. ☕</p>
                    <div className="card-actions justify-center">
                    <a href="https://forms.office.com/pages/responsepage.aspx?id=cZYxzedSaEqvqfz4-J8J6jHKX_qikJNIrMGddpYhe7ZUQkhIWVZYWEwxRFRaREdDWDdMU09KT1JRUC4u"><button className="btn btn-block">RSVP</button></a>
                    </div>
            </div>

        </div>
    </Default>
  )
}

export default About
