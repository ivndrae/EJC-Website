import Default from './Default';

function Interview(title: string, interviewee: string, bio: string, link: string) {
    return (
        <div className="flex flex-col justify-center md:flex-row p-2">
            <div className="flex flex-col basis-2/3">
                <div className="flex mt-8 bg-[#222430] p-5 lg:p-8 rounded-lg gap-2 text-white shadow-2xl shadow-stone-800 ">
                    <div className="flex flex-col w-full md:top-36  px-8">
                        <p className="text-3xl md:text-4xl  mb-2 font-bold font-['JetBrains_Mono'] italic uppercase text-center">{title}</p>
                        <p className="uppercase font-bold font-['KoHo'] mt-4">About {interviewee}:</p>
                        <p className="font-['KoHo'] my-2 ">{bio}</p>
                        <div className="flex justify-center w-full mt-4">
                            <a href={link}
                                className="flex bg-transparent hover:bg-red-800 text-red-800 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-800 hover:border-transparent hover:animate-pulse"
                                target="_blank" rel="noopener noreferrer">
                                SEE INTERVIEW TRANSCRIPT</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function Interviews() {
    return (
        <Default>
            <div className="flex flex-col text-white p-1">
                {Interview("Exploring Natural Language Processing and the Future of Ethical AI", "Elinor Poole-Dayan", "Elinor is currently a Master’s student at the MIT Center for Constructive Communication focusing on natural language processing (NLP) issues on fairness, safety, and social good applications. Completing her undergraduate degree from McGill in 2023 in Honours Mathematics and Computer Science, Elinor’s focus in NLP stemmed from her interests in linguistics and math.", "EPD_interview.htm")}
            </div>
        </Default>

    )
}

export default Interviews