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
import Default from './Default';

function Person(imgSrc: string, name: string, position: string, bio: string) {
    return (
        <div className="flex flex-col md:flex-row p-2">
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

function Team() {
    return (
        <Default>
            <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                MEET THE 2023-2024 EXECUTIVE TEAM
            </div>
            <div className="flex flex-col text-white p-1">
                {Person(cella, "Cella Wardrop", "Co-Director", "Cella grew up in the UK and is currently a third-year student studying Honours Sociology, Economics, and Social Entrepreneurship at McGill University. She is fascinated by technological innovation and AI ethics. During her time at EJC, she has co-authored four briefs published by the Montreal AI Ethics Institute.")}
                {Person(cleo, "Cleo Norris", "Co-Director", "Cleo Norris is in her fourth year at McGill University, majoring in mathematics and minoring in economics, and from Marin County, California. She became interested in AI after exploring scientific machine learning and computational mathematical analysis through McGill’s Directed Reading Program. She also loves to run, play tennis, and create art.")}
                {Person(julia, "Julia Houwen", "Director of Events", "Julia is a U3 student double majoring in computer science and philosophy. She is interested in AI ethics because she thinks it’s a very new and rapidly developing field, and it will be, if not already, one of the most relevant topics of our time. She joined EJC because she likes being able to engage people in discussions about it. In her free time, you’ll find her swing dancing, knitting or outside somewhere in a forest during the summer.")}
                {Person(sophie, "Sophie Potvin", "Events Coordinator", "Sophie is the Event Coordinator for the year 2023-2024 and is a U1 student majoring in cognitive science. Eager to learn more about the challenges encountered with the rise of AI, she wants to promote education on the topic of AI ethics. Organizing events will be a way for her, to gather people around some powerful conversations and interrogations, hoping to understand the changing world a little bit more.")}
                {Person(andrae, "Andrae Wang", "Director of Web Operations", "Coming from Hong Kong, Andrae is currently a third-year student at McGill University, with a major in Cognitive Science and a minor in Economics. As AI continues to evolve rapidly and prove its transformative potential, she recognizes the importance of AI literacy. Her firm belief lies in leveraging technology to benefit humanity, ensuring its responsible and ethical development. Through EJC, she hopes to bridge the knowledge gap in AI and spark impactful discussions.")}
                {Person(thuy, "Le Thuy Duong Nguyen", "Co-Director of Content", "Thuy is a third-year undergraduate student studying Cognitive Science with a minor in International Development Studies. Originally from Hanoi, Vietnam, she has lived in Geneva, Stockholm, and Ottawa before coming to Montreal for her studies. She's passionate about the intersection of neuroscience and AI for socially beneficial applications. From working at an Open Science lab to empowering and amplifying youth voices on the topic of AI regulation at the two Model United Nations conferences hosted by McGill Students, SSUNS and McMUN, she firmly believes in the power of inclusive dialogue in shaping a better world. She hopes to do the same for EJC, promoting a human-centered, ethical foundation for AI innovation in Canada and beyond.")}
                {Person(aimee, "Aimee Lee", "Co-Director of Content","Aimee is a second year student in Desautels studying Finance, IT Management, and World Cinemas. Her interest in AI and tech was jumpstarted by ChatGPT and COMP202, and she remains in awe of the speed in which AI is developing. Her role is EJC is underscored by a commitment to making AI more accessible and digestible. In her free time, she loves learning new musical instruments (currently: harmonica), crocheting, and being outdoors.")}
                {Person(roberto,"Roberto Concepcion","Associate Director of Content","Roberto is a U2 student at McGill University studying International Development, Sociology, and Communications. Their academic interests lie in the intersection of technology and development by understanding how technologies carry sociopolitical ideologies that shape social dynamics. Roberto is interested in AI ethics because they are invested in contributing toward a positive impact in the social and equitable aspects of the technology industry through research and creating accessible content for younger audiences. Through their involvement in EJC, they are excited to be part of a global movement of harnessing technologies for social good.")}
                {Person(hamidah,"Hamidah Oderinwale","Associate Director of Content","Hamidah is a first-year at McGill, likely declaring a math major. She’s interested in the transformative power of AI, its effects on the economy and the digital infrastructure needed to take advantage of its potential. In her free time, she’s probably writing or reading a blog post.")}
                {Person(sofia, "Sofia Woo", "Content Writer", "Sofia Woo is a recent McGill graduate from San Francisco who studied Honors History and minored in Political Science. Through working with EJC, Sofia hopes to increase AI ethics literacy amongst McGill students and beyond.")}
                {Person(molka, "Molka Mehri", "Director of Marketing", "Molka is a U3 student at Desautels, where she is majoring in Marketing with a double concentration in retail management and strategic management. Her interests span the realms of politics, fashion (especially couture), and the joy of reading. She's recently joined EJC because of her profound interest in AI. In a world where technology's power is constantly evolving, and human boundaries are becoming less clear, she believes in the significance of AI ethics and literacy. She aims to contribute to shaping a world where these aspects are given the importance they deserve. EJC, to her, is an avenue through which she can actively contribute to the protection and ethical development of AI.")}
            </div>
        </Default>
    )
}

export default Team