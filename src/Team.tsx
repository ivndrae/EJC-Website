import cella from './assets/cella.jpg'
import andrae from './assets/andrae.jpg'
import thuy from './assets/Thuy.jpg'
import cleo from './assets/Cleo.png'
import julia from './assets/Julia.jpg'
import sophie from './assets/Sophie.jpg'
import sofia from './assets/Sofia.jpg'
import molka from './assets/molka.jpg'
import aimee from './assets/aimee.jpg'
import roberto from './assets/Roberto.jpeg'
import hamidah from './assets/hamidah.jpeg'
import itai from './assets/Itai.png'
import sara from './assets/Sara.png'
import dane from './assets/Dane.png'
import chloe from './assets/Chloe.png'
import Default from './Default';

function Person(imgSrc: string, name: string, position: string, bio: string) {
    return (
        <div className="flex flex-col md:flex-row p-3 my-2">
            <div className="flex w-full justify-center basis-1/4">
                <img className="flex-[0_0_auto] p-4 w-56 h-56" src={imgSrc} />
            </div>
            <div className="flex flex-col basis-3/4">
                <div className="flex flex-wrap text-white text-2xl md:text-3xl pl-3 pt-3 font-bold font-['JetBrains_Mono'] tracking-wider">
                    <div className="flex sm:border-white sm:border-r-4 pr-4 mr-4">{name}</div>
                    <div className="flex w-96">{position}</div>
                </div>
                <div className="flex p-3 font-['KoHo'] md:text-xl font-bold ">
                    {bio}
                </div>
            </div>
        </div>
    )
}

function Alumni(imgSrc: string, name: string, position: string, year: string) {
    return (
        <div className="flex flex-col items-center p-4 mx-4">
            <img className="flex-[0_0_auto] p-4 w-56 h-56" src={imgSrc} />
            <div className="flex flex-wrap text-white text-2xl md:text-3xl pl-3 pt-3 font-bold font-['JetBrains_Mono'] tracking-wide">{name}</div>
            <div className="flex flex-wrap text-white font-['KoHo'] md:text-xl font-bold ">{position}</div>
            <div className="flex flex-wrap text-white font-['KoHo'] md:text-lg font-bold ">{year}</div>
        </div>
    )
}

function Team() {
    return (
        <Default>
            <div className="flex m-16 bg-[#222430] p-5 lg:p-14 justify-center text-white text-3xl md:text-5xl mb-5 italic font-black  text-center tracking-widest font-['Lato'] lg:underline lg:underline-offset-8">MEET THE 2024-2025 EXECUTIVE TEAM</div>
            <div className="flex flex-col text-white p-3 lg:mx-3">
                {Person(cella, "Cella Wardrop", "Director", "Cella grew up in the UK and is currently a fourth-year student studying Honours Sociology, Economics, and Social Entrepreneurship at McGill University. She is fascinated by technological innovation and AI ethics. During her time at EJC, she has co-authored four briefs published by the Montreal AI Ethics Institute.")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    CONTENT TEAM
                </div>
                {Person(thuy, "Le Thuy Duong Nguyen", "Co-Director of Content (Briefs)", "Thuy is a fourth-year undergraduate student studying Cognitive Science with a minor in International Development Studies. Originally from Hanoi, Vietnam, she has lived in Geneva, Stockholm, and Ottawa before coming to Montreal for her studies. She's passionate about the intersection of neuroscience and AI for socially beneficial applications. From working at an Open Science lab to empowering and amplifying youth voices on the topic of AI regulation at the two Model United Nations conferences hosted by McGill Students, SSUNS and McMUN, she firmly believes in the power of inclusive dialogue in shaping a better world. She hopes to do the same for EJC, promoting a human-centered, ethical foundation for AI innovation in Canada and beyond.")}
                {Person(aimee, "Aimee Lee", "Co-Director of Content (Podcast)", "Aimee is a third year student in Desautels studying Finance, IT Management, and World Cinemas. Her interest in AI and tech was jumpstarted by ChatGPT and COMP202, and she remains in awe of the speed in which AI is developing. Her role is EJC is underscored by a commitment to making AI more accessible and digestible. In her free time, she loves learning new musical instruments (currently: harmonica), crocheting, and being outdoors.")}
                {Person(roberto, "Roberto Concepcion", "Content Writer / Podcast Coordinator", "Roberto is a U3 student at McGill University studying International Development, Sociology, and Communications. Their academic interests lie in the intersection of technology and development by understanding how technologies carry sociopolitical ideologies that shape social dynamics. Roberto is interested in AI ethics because they are invested in contributing toward a positive impact in the social and equitable aspects of the technology industry through research and creating accessible content for younger audiences. Through their involvement in EJC, they are excited to be part of a global movement of harnessing technologies for social good.")}
                {Person(hamidah, "Hamidah Oderinwale", "Content Writer / Podcast Coordinator", "Hamidah is a second-year at McGill, likely declaring a math major. She’s interested in the transformative power of AI, its effects on the economy and the digital infrastructure needed to take advantage of its potential. In her free time, she’s probably writing or reading a blog post.")}
                {Person(sofia, "Sofia Woo", "Content Writer", "Sofia Woo is a McGill graduate from San Francisco who studied Honors History and minored in Political Science. Through working with EJC, Sofia hopes to increase AI ethics literacy amongst McGill students and beyond.")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    EVENTS TEAM
                </div>
                {Person(sophie, "Sophie Potvin", "Events Lead", "Sophie is a U2 student majoring in cognitive science. Eager to learn more about the challenges encountered with the rise of AI, she wants to promote education on the topic of AI ethics. Organizing events will be a way for her, to gather people around some powerful conversations and interrogations, hoping to understand the changing world a little bit more.")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    COMMUNICATIONS TEAM
                </div>
                {Person(andrae, "Andrae Wang", "Director of Web Operations", "Coming from Hong Kong, Andrae is currently in her final year at McGill University, with a major in Cognitive Science and a minor in Economics. As AI continues to evolve rapidly and prove its transformative potential, she recognizes the importance of AI literacy. Her firm belief lies in leveraging technology to benefit humanity, ensuring its responsible and ethical development. Through EJC, she hopes to bridge the knowledge gap in AI and spark impactful discussions.")}
            </div>
            <div className="flex m-16 bg-[#222430] p-5 lg:p-14 justify-center text-white text-3xl md:text-5xl mb-5 italic font-black  text-center tracking-widest font-['Lato'] underline underline-offset-8"> EJC ALUMNI</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 my-2">
                {Alumni(sara, "Sara Parker", "EJC FOUNDER", "2021-2023")}
                {Alumni(dane, "Dane Malenfant", "CONTENT WRITER", "2021-2023")}
                {Alumni(chloe, "Chloe Currie", "DIRECTOR OF CONTENT", "2021-2023")}
                {Alumni(itai, "Itai Epstein", "DIRECTOR OF WEB OPERATIONS / CONTENT WRITER", "2021-2023")}
                {Alumni(cleo, "Cleo Norris", "CO-DIRECTOR", "2023-2024")}
                {Alumni(julia, "Julia Houwen", "DIRECTOR OF EVENTS", "2023-2024")}
                {Alumni(molka, "Molka Mehri", "DIRECTOR OF MARKETING", "2023-2024")}
            </div>

        </Default>
    )
}

export default Team