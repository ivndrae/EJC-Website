import Default from './Default';

function Resources() {
    return (
        <Default>
            <div className="collapse collapse-plus bg-base-100 mt-6">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-white">
                Encode Justice Canada Tea & Talk: Existentialist Risk of AI
                </div>
                <div className="collapse-content">
                    <a href="https://yoshuabengio.org/2023/06/24/faq-on-catastrophic-ai-risks/"><a className="link link-hover p-3">FAQ on Catastrophic AI risks by Yoshua Bengio</a></a> <br/><br/>
                    <a href="https://www.journalofdemocracy.org/ai-and-catastrophic-risk/"><a className="link link-hover p-3">AI and Catastrophic risk” by Yoshua Bengio</a></a><br/><br/>
                    <a href="https://link.springer.com/article/10.1007/s00146-019-00912-z"><a className="link link-hover p-3 ">“The New AI Spring: a Deflationary View” by Jocelyn Maclure</a></a><br/><br/>
                    <a href="https://www.youtube.com/watch?v=EBK-a94IFHY"><a className="link link-hover p-3">Stuart Russel on creating safer AI</a></a><br/><br/>
                    <a href="https://www.youtube.com/watch?v=JL5OFXeXenA&t=11s"><a className="link link-hover p-3">"The Urgent Risks of Runaway AI"</a></a><br/><br/>
                    <a href="https://academic.oup.com/book/33540/chapter/287905325"><a className="link link-hover p-3">"Planning for Mass Unemployment" by Aaron James</a></a>
                </div>
            </div>
        </Default>
    )
}

export default Resources