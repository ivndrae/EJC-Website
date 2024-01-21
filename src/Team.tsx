import cella from './assets/cella.jpg'
import andrae from './assets/andrae.jpg'
import thuy from './assets/Thuy.jpg'
import cleo from './assets/Cleo.png'
import julia from './assets/Julia.jpg'
import sophie from './assets/Sophie.jpg'
import sofia from './assets/Sofia.jpg'
import molka from './assets/molka.jpg'
import Default from './Default';

function Person(imgSrc: string, name: string, position: string, bio: string) {
    return (
        <div className="flex p-2">
            <img className="flex p-3.5 w-1/5 max-w-80 h-1/5 max-h-80" src={imgSrc} />
            <div className="flex flex-col">
                <div className="text-white text-3xl pl-3 pt-3 font-bold font-['Lato'] tracking-wider">
                    {name} | {position}
                </div>
                <div className="p-3 font-['KoHo'] text-xl font-bold">
                    {bio}
                </div>
            </div>
        </div>
    )
}

function Team() {
    return (
        <Default>
            <div className="text-white drop-shadow-lg text-5xl italic font-black pt-12 text-center tracking-widest font-['Lato']">
                MEET THE 2023-2024 EXECUTIVE TEAM
            </div>
            <div className="flex flex-col mx-28 my-16">
                {Person(cella, "Cella Wardrop", "Co-Director", "Cella grew up in the UK and is currently a third-year student studying Honours Sociology, Economics, and Social Entrepreneurship at McGill University. She is fascinated by technological innovation and AI ethics. During her time at EJC, she has co-authored four briefs published by the Montreal AI Ethics Institute.")}
                {Person(cleo, "Cleo Norris", "Co-Director", "Cleo Norris is in her fourth year at McGill University, majoring in mathematics and minoring in economics, and from Marin County, California. She became interested in AI after exploring scientific machine learning and computational mathematical analysis through McGill’s Directed Reading Program. She also loves to run, play tennis, and create art.")}
                {Person(julia,"Julia Houwen", "Director of Events","Julia is a U3 student double majoring in computer science and philosophy. She is interested in AI ethics because she thinks it’s a very new and rapidly developing field, and it will be, if not already, one of the most relevant topics of our time. She joined EJC because she likes being able to engage people in discussions about it. In her free time, you’ll find her swing dancing, knitting or outside somewhere in a forest during the summer.")}
                {Person(sophie,"Sophie Potvin","Events Coordinator","Sophie is the Event Coordinator for the year 2023-2024 and is a U1 student majoring in cognitive science. Eager to learn more about the challenges encountered with the rise of AI, she wants to promote education on the topic of AI ethics. Organizing events will be a way for her, to gather people around some powerful conversations and interrogations, hoping to understand the changing world a little bit more.")}
                {Person(andrae,"Andrae Wang","Director of Web Operations","Coming from Hong Kong, Andrae is currently a third-year student at McGill University, with a major in Cognitive Science and a minor in Economics. As AI continues to evolve rapidly and prove its transformative potential, she recognizes the importance of AI literacy. Her firm belief lies in leveraging technology to benefit humanity, ensuring its responsible and ethical development. Through EJC, she hopes to bridge the knowledge gap in AI and spark impactful discussions.")}
                {Person(thuy,"Le Thuy Duong Nguyen","Co-Director of Content","Thuy is a third-year undergraduate student studying Cognitive Science with a minor in International Development Studies. Originally from Hanoi, Vietnam, she has lived in Geneva, Stockholm, and Ottawa before coming to Montreal for her studies. She's passionate about the intersection of neuroscience and AI for socially beneficial applications. From working at an Open Science lab to empowering and amplifying youth voices on the topic of AI regulation at the two Model United Nations conferences hosted by McGill Students, SSUNS and McMUN, she firmly believes in the power of inclusive dialogue in shaping a better world. She hopes to do the same for EJC, promoting a human-centered, ethical foundation for AI innovation in Canada and beyond.")}
                {Person(sofia,"Sofia Woo", "Content Writer", "Sofia Woo is a recent McGill graduate from San Francisco who studied Honors History and minored in Political Science. Through working with EJC, Sofia hopes to increase AI ethics literacy amongst McGill students and beyond.")}
                {Person(molka,"Molka Mehri","Director of Marketing","Molka is a U3 student at Desautels, where she is majoring in Marketing with a double concentration in retail management and strategic management. Her interests span the realms of politics, fashion (especially couture), and the joy of reading. She's recently joined EJC because of her profound interest in AI. In a world where technology's power is constantly evolving, and human boundaries are becoming less clear, she believes in the significance of AI ethics and literacy. She aims to contribute to shaping a world where these aspects are given the importance they deserve. EJC, to her, is an avenue through which she can actively contribute to the protection and ethical development of AI.")}
            </div>
        </Default>
    )
}

export default Team