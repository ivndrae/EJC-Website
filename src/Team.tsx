import andrae from './assets/ppl/andrae.jpg'
import thuy from './assets/ppl/Thuy.jpg'
import cleo from './assets/ppl/Cleo.png'
import julia from './assets/ppl/Julia.jpg'
import sophie from './assets/ppl/Sophie.jpg'
import sofia from './assets/ppl/Sofia.jpg'
import molka from './assets/ppl/molka.jpg'
import aimee from './assets/ppl/aimee.jpg'
import roberto from './assets/ppl/Roberto.jpg'
import hamidah from './assets/ppl/hamidah.jpeg'
import itai from './assets/ppl/Itai.png'
import sara from './assets/ppl/Sara.png'
import dane from './assets/ppl/Dane.png'
import chloe from './assets/ppl/Chloe.png'
import whiming from './assets/ppl/WhiMing.jpg'
import sydney from './assets/ppl/Sydney.jpg'
import anna from './assets/ppl/Anna.jpg'
import kanika from './assets/ppl/Kanika.jpg'
import abby from './assets/ppl/Abby.jpg'
import isabella from './assets/ppl/Isabella.jpg'
import alix from './assets/ppl/Alix.jpg'
import emma from './assets/ppl/Emma.jpg'
import jovan from './assets/ppl/Jovan.png'
import nika from './assets/ppl/Nika.jpg'
import sarah from './assets/ppl/Sarah.jpg'
import aiba from './assets/ppl/aiba.jpg'
import alessandra from './assets/ppl/alessandra.jpg'
import nina from './assets/ppl/nina.png'
import rosa from './assets/ppl/rosa.jpg'
import thien from './assets/ppl/thien.jpg'
import nils from './assets/ppl/nils.jpg'


import Default from './Default';

function Person(imgSrc: string, name: string, position: string, bio: string, email: string) {
    return (
        <div className="flex flex-col md:flex-row p-3 my-2">
            <div className="flex w-full justify-center basis-1/4">
                <img className="flex-[0_0_auto] p-4 w-56 h-56" src={imgSrc} />
            </div>
            <div className="flex flex-col basis-3/4">
                <div className="flex flex-wrap text-white text-2xl md:text-3xl pl-3 pt-3 font-bold font-['JetBrains_Mono'] tracking-wider">
                    <div className="flex mr-2">{position}</div>
                    <div className="flex text-xl md:text-2xl font-bold mt-1">&lt;{name}&gt;</div>
                    <a className="flex px-4" href={email}><i className="bi bi-envelope-fill text-3xl"></i></a> 
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

function policyFellow(imgSrc: string, name: string, bio: string){
    return (
        <div className="flex flex-col md:flex-row p-3 my-2">
            <div className="flex w-full justify-center basis-1/4">
                <img className="flex-[0_0_auto] p-4 w-56 h-56" src={imgSrc} />
            </div>
            <div className="flex flex-col basis-3/4">
                <div className="flex flex-wrap text-white text-2xl md:text-3xl pl-3 pt-3 font-bold font-['JetBrains_Mono'] tracking-wider">
                    <div className="flex font-bold">&lt;{name}&gt;</div>
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
            <div className="flex m-16 bg-[#222430] p-5 lg:p-14 justify-center text-white text-3xl md:text-5xl mb-5 italic font-black  text-center tracking-widest font-['Lato'] lg:underline lg:underline-offset-8 shadow-2xl shadow-stone-800">MEET THE 2024-2025 EXECUTIVE TEAM</div>
            <div className="flex flex-col text-white p-3 lg:mx-3">
{/*                 {Person(cella, "Cella Wardrop", "Director", "Cella is studying Honours Sociology, Economics and Entrepreneurship at McGill University. Graduating in May 2025, she is passionate about AI governance, ethics, and the future of human-computer interactions. She has published work in the Montreal AI Ethics Institute, featured on CBC's Spark podcast, and is currently writing her undergraduate thesis on LLMs. She has international work experience in diverse industries and is pursuing graduate opportunities in Europe.", "mailto:cella.wardrop@mail.mcgill.ca")} */}
                {Person(aimee, "Aimee Li", "Co-Director", "Aimee is a third year student in Desautels studying Finance, IT Management, and Philosophy. Her interest in AI and tech was jumpstarted by ChatGPT and COMP202, and she remains in awe of the speed in which AI is developing. Her role is Encode Canada is underscored by a commitment to making AI more accessible and digestible. In her free time, she loves learning new musical instruments (currently: harmonica), crocheting, and being outdoors.","mailto:aimee.li@mail.mcgill.ca")}
                {Person(jovan, "Jovan Rohac", "Co-Director", "Jovan is a U2 student at McGill University, pursuing a dual degree in Economics and Computer Science. His passion for artificial intelligence stems from a keen interest in exploring the balance between innovation and ethics, emphasizing the importance of public policy in the AI landscape. In his spare time, Jovan enjoys hiking and running, with aspirations to tackle ultra-marathons in the future.","mailto:jovanrohac2004@gmail.com")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    CONTENT TEAM
                </div>
                {Person(roberto, "Roberto Concepcion", "Podcast Coordinator", "Roberto is a third-year undergraduate at McGill pursuing a degree in International Development Studies, Sociology, and Management. Roberto’s interests lie in understanding the sociological and political implications of technology. They are particularly interested in the responsible applications of AI in the entertainment industry and the gendered aspects of LLMs. As a podcast coordinator at Encode Canada, Roberto hopes to communicate ideas surrounding AI ethics in an accessible and entertaining format.","mailto:roberto.concepcion@mail.mcgill.ca")}
                {Person(isabella, "Isabella Arcuri", "Podcast Coordinator", "Isabella is a U3 student at McGill studying Honors International Development and Computer Science. As co-director of the Encode Canada podcast, she brings her fascination with AI and its societal impacts to the forefront, spreading awareness of the ethical challenges and transformative potential of emerging AI and ML technologies.","mailto:isa.arcuri@gmail.com")}
                {Person(sofia, "Sofia Woo", "Podcast Coordinator", "Sofia Woo is a McGill graduate from San Francisco who studied Honors History and minored in Political Science. Through working with Encode Canada, Sofia hopes to increase AI ethics literacy amongst McGill students and beyond.","mailto:woosofia38@gmail.com")}
                {Person(thuy, "Le Thuy Duong Nguyen", "Director of Briefs", "Thuy is a fourth-year undergraduate student studying Cognitive Science with a minor in International Development Studies. Originally from Hanoi, Vietnam, she has lived in Geneva, Stockholm, and Ottawa before coming to Montreal for her studies. She's passionate about the intersection of neuroscience and AI for socially beneficial applications. From working at an Open Science lab to empowering and amplifying youth voices on the topic of AI regulation at the two Model United Nations conferences hosted by McGill Students, SSUNS and McMUN, she firmly believes in the power of inclusive dialogue in shaping a better world. She hopes to do the same for Encode Canada, promoting a human-centered, ethical foundation for AI innovation in Canada and beyond.","mailto:le.thuy.nguyen@mail.mcgill.ca")}
                {Person(alix, "Alix Faulkner", "Writer", "Alix is a third year Honours Sociology student with a minor is Social Studies of Medicine at McGill University. Her interest in AI developed after beginning research on deepfake pornogrpahy for a course, where she became interested in the current legal frameworks, or lack thereof, surrounding AI in Canada. Through Encode Canada, Alix hopes to learn and educate those around her on the possibilities and risks of AI implementation into our everyday lives.","mailto:alix.mf4@gmail.com")}
                {Person(emma, "Emma Simon", "Writer", "Emma is a first-year at McGill studying Cognitive Science. Her interest in AI overlaps with a general interest in technology and how it adds to (or detracts from) society. She hopes to make AI information more accessible and improve popular understanding of the field, allowing for more independent, personal judgement of this explosion of development.","mailto:emmasimon369@gmail.com")}
                {Person(abby, "Abby Buller", "Writer", "Abby is pursuing her master’s degree in electrical engineering at McGill. She has a keen interest in the intersection of AI, philosophy, and law, and is passionate about empowering folks in the age of AI through education. When she’s not working on her research, she loves teaching dance, camping, and baking for her friends!","mailto:amkbuller@gmail.com")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    EVENTS TEAM
                </div>
                {Person(sophie, "Sophie Potvin", "Lead Events Coordinator", "Sophie is a U2 student majoring in Cognitive Science. Eager to learn more about responsible AI and the challenges encountered with the rise of technology, she wants to spark people’s interest on the topic. She believes that everyone should be part of the discussion concerning today’s society and that together, we can understand the changing world a little bit more.","mailto:sophie.potvin@mail.mcgill.ca")}
                {Person(anna, "Anna Zhou", "Events Coordinator", "Anna is a second-year student majoring in Cognitive Science with a minor in Economics. She grew up in Shanghai and came to Canada for her studies. Daily interactions with AI-powered tools and algorithms have inspired her to seek deeper insights into the potential concerns that may accompany the conveniences they provide, as well as the aspects that may be neglected in the rapidly growing field of AI. Anna aims to explore topics in AI ethics and policy with the audience during Encode Canada events. She wants to engage in discussions and listen to diverse perspectives from individuals.","mailto:annazhou2004@gmail.com")}
                {Person(sydney, "Sydney Toffa", "Events Coordinator", "Sydney is a fourth-year undergraduate student at McGill University studying Honours Cognitive Science with a minor in Psychology. She is passionate about the ethical use of AI and she hopes to advance the discussion around its exploration versus exploitation. Her fascination with the brain and mind shape her perspective on AI and she firmly believes that using AI responsibly is a conversation to be shared by all.","mailto:sjtoffa@gmail.com")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    WEB TEAM
                </div>
                {Person(andrae, "Andrae Wang", "Director of Web Operations", "Coming from Hong Kong, Andrae is currently in her final year at McGill University, with a major in Cognitive Science and a minor in Economics. As AI continues to evolve rapidly and prove its transformative potential, she recognizes the importance of AI literacy. Her firm belief lies in leveraging technology to benefit humanity, ensuring its responsible and ethical development. Through Encode Canada, she hopes to bridge the knowledge gap in AI and spark impactful discussions.","mailto:wailin.wang@mail.mcgill.ca")}
                {Person(whiming, "Whi-Ming Joseph", "Web Designer", "Whi-Ming, born and raised in the South Shore of Montreal, is studying in his third year in Computer Science at Concordia University. He dreads the day that AI takes over, so he would like to help guide the conversation towards safe and equitable AI for everyone through design. He believes good design is important because it attracts people, which is necessary to have a conversation and make change","mailto:whimingj@gmail.com")}
                {Person(sarah, "Sarah Matmati", "Web Developer", "Sarah Matmati is currently in her third year at McGill Univserity studying Computer Science with a concetration in Artifical Intelligence. She is originally from France and grew up in the US. She thinks AI literacy is very important for our generation and for our future and she hopes that by being involved with Encode Canada's website she will be able to reach more people and spread this message.","mailto:sarah.matmati26@gmail.com")}
                <div className="text-white drop-shadow-lg text-3xl md:text-5xl mb-5 italic font-black pt-12 text-center tracking-widest font-['Lato'] underline underline-offset-8">
                    OUTREACH TEAM
                </div>
                {Person(kanika, "Kanika Singh Pundir", "Co-director of Marketing", "Kanika Singh Pundir is a third-year computer science major, passionate about bridging the gap between technology and ethical responsibility. She believes in the power of community and is committed to fostering awareness and inspiring change across Canada. By managing Encode Canada’s social media, she aims to connect, inform, and engage young people in the movement for ethical technology.","mailto:kanika.singhpundir@mail.mcgill.ca")}
                {Person(nika, "Nika Aghili", "Co-director of Marketing", "Nika is a third-year economics student at Concordia University with a strong interest in technology and its social impact. As Co-Director of Marketing at Encode Canada, she is excited to work on initiatives that promote fairness and ethical standards in AI. Outside of school, Nika loves playing pool and is always up for a game.","mailto:nikaaghili01@gmail.com")}
                </div>

            <div className="flex m-16 bg-[#222430] p-5 lg:p-14 justify-center text-white text-3xl md:text-5xl mb-5 italic font-black  text-center tracking-widest font-['Lato'] underline underline-offset-8"> POLICY FELLOWS</div>
            <div className="flex flex-col text-white p-3 lg:mx-3">
                {policyFellow(aiba,"Aibakyt Baekova","Aiba is a first-year BCL/JD student at McGill University’s Faculty of Law. She holds a Bachelor’s degree in Global Politics (Summa Cum Laude) and is an experienced researcher with a background in policy and consulting, both in Canada and internationally. Aiba’s interests lie in AI law, policy, and ethics, with a particular focus on protecting the rights and interests of marginalized groups.")}
                {policyFellow(alessandra, "Alessandra Destison","Alessandra is a U2 Joint Honours student in Political Science and Philosophy. She is passionate about the intersection of artificial intelligence, ethics, and policymaking! She aspires to contribute to the development of an AI policy framework that prioritizes human well-being.")}
                {policyFellow(nina, "Nina Soula","Nina is a third-year student at McGill University, pursuing a degree in Political Science and International Development. Her academic research focuses on platform power, algorithmic governance, state surveillance, and the emerging field of tech diplomacy shaping global politics. Passionate about the intersection of technology and human rights, Nina is eager to contribute to the reevaluation of human rights frameworks in the digital era, ensuring they remain robust and adaptive in the face of rapid technological advancements.")}
                {policyFellow(rosa, "Rosa Lee", "Rosa is a Master of Information student at the University of Toronto specialising in Human-Centred Data Science. She is passionate about enacting ethical AI governance and equitable AI policies.")}
                {policyFellow(thien, "Thien-Lam Nguyen","Born and raised in Vietnam, Thien-Lam recently discovered her passion for exploring how emerging technologies shape global mobility, labor markets, and governance structures, with a focus on automation’s impact on migrant workers and the digital economy’s role in shaping migration patterns. When she’s not analyzing policy frameworks, she can be found traveling for debate tournaments, enjoying Vietnamese coffee at Stanley Park, or exploring art museums.")}
            </div>


            <div className="flex m-16 bg-[#222430] p-5 lg:p-14 justify-center text-white text-3xl md:text-5xl mb-5 italic font-black  text-center tracking-widest font-['Lato'] underline underline-offset-8"> EJC ALUMNI</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 my-2">
                {Alumni(sara, "Sara Parker", "EJC FOUNDER", "2021-2023")}
                {Alumni(nils, "Nils Aoun", "DIRECTOR OF COMMUNICATIONS", "2021-2023")}
                {Alumni(dane, "Dane Malenfant", "CONTENT WRITER", "2021-2023")}
                {Alumni(chloe, "Chloe Currie", "DIRECTOR OF CONTENT", "2021-2023")}
                {Alumni(itai, "Itai Epstein", "DIRECTOR OF WEB OPERATIONS / CONTENT WRITER", "2021-2023")}
                {Alumni(cleo, "Cleo Norris", "CO-DIRECTOR", "2023-2024")}
                {Alumni(julia, "Julia Houwen", "DIRECTOR OF EVENTS", "2023-2024")}
                {Alumni(molka, "Molka Mehri", "DIRECTOR OF MARKETING", "2023-2024")}
                {Alumni(hamidah, "Hamidah Oderinwale", "CONTENT WRITER", "2023-2024")}
            </div>

        </Default>
    )
}

export default Team
