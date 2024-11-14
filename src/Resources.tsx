import Default from './Default';
import articlelogo from './assets/logos/partners/AI logo.png';
import thumbnail from './assets/vidthumbnail.png';

function Card(imgSrc: string, title: string, description: string, link: string, button: string, action: string) {
    return (
        <div className="flex p-5 justify-center md:w-full">
            <div className="card bg-base-100 image-full w-56 shadow-xl z-0">
                <figure>
                    <img src={imgSrc} />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title text-white">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <a href={link}><button className={button}>{action}</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Resources() {
    return (
        <Default>
            <div className="lg:py-8">
                <div className="p-6 lg:p-10 bg-primary text-white text-5xl font-black grid place-content-center hover:animate-pulse">DEFINING AI</div>
                <div className="flex flex-col md:flex-row">
                    {Card("https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/83/11/maximo_maintenance1_management.component.xl.ts=1706705365513.png/content/adobe-cms/us/en/topics/artificial-intelligence/jcr:content/root/leadspace",
                        "What is Artificial Intelligence?", "by IBM", "https://www.ibm.com/topics/artificial-intelligence", "btn btn-primary", "Read")}
                    {Card(articlelogo, "Artificial Intelligence", "by Builtin", "https://builtin.com/artificial-intelligence", "btn btn-primary", "Read")}
                    {Card(thumbnail, "Artificial Intelligence in 5 minutes", "by Dr. Raj Ramesh", "https://www.youtube.com/watch?v=2ePf9rue1Ao", "btn btn-primary", "Watch")}
                </div>

                <div className="p-6 lg:p-10 bg-secondary text-white text-5xl font-black grid place-content-center hover:animate-pulse my-3">AI IN CANADA</div>
                <div className="flex flex-col md:flex-row">
                    {Card("https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2018/11/1127-ai-wp.jpg?quality=90&strip=all&w=564&h=423&type=webp&sig=m1xI_7YKrdkEOLYw1gYuVg",
                        "Canada risks losing its artificial intelligence edge as adoption lags and the tech goes mainstream", "by James McLeod", "https://financialpost.com/technology/canada-risks-losing-its-artificial-intelligence-edge-as-adoption-lags-and-the-tech-goes-mainstream", "btn btn-secondary", "Read")}
                    {Card("https://imageio.forbes.com/specials-images/imageserve/5f67d6b8af733458404e97bf/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", "Learning From The Canadian Model Of AI", "by Tom Davenport", "https://www.forbes.com/sites/tomdavenport/2019/11/19/learning-from-the-canadian-model-of-ai/?sh=3844136d2300", "btn btn-secondary", "Read")}
                </div>

                <div className="p-6 lg:p-10 bg-accent text-white text-5xl font-black grid place-content-center hover:animate-pulse my-3">AI ETHICS</div>
                <div className="flex flex-col md:flex-row">
                    {Card("https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/s-migr/ul/g/83/11/maximo_maintenance1_management.component.xl.ts=1706705365513.png/content/adobe-cms/us/en/topics/artificial-intelligence/jcr:content/root/leadspace",
                        "Constructing AI: Examining how AI is shaped by data, models and people", "by Katrina Ingram", "https://informationethics.ca/index.php/irie/article/view/415/388", "btn btn-accent", "Read")}
                    {Card("https://montrealethics.ai/wp-content/uploads/2022/01/SAIER-January-2022-Cover-Page-1.png", "The State of AI Ethics Report", "by MAIEI", "https://montrealethics.ai/volume6/", "btn btn-accent", "Read")}
                </div>
            </div>

        </Default>
    )
}

export default Resources