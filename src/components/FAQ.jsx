function Faq(){

    return(
        <>
            <main className="mb-[100px] p-2" id="faq">
                <div className="container mx-auto mb-8">
                    <div className="flex items-center justify-center">
                        <div data-aos="zoom-in">
                        <h3 className='text-2xl md:text-[3rem] leading-[120%] mb-4 font-bold text-center'>Frequently Ask Question</h3>
                            <p className="text-lg">Get more information on how our proof of Inu, and get answers to your questions </p>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="w-full mx-2 md:w-2/3 md:mx-auto mt-8 bg-primary-blue py-8 rounded-3xl">
                        <Accordion
                            id="0"
                            title="What is Proof of Inu?"
                            content="Proof of Inu is a layer 2 blockchain for meme tokens, which focuses on safety of tokens launched on its chain. Please read the whitepaper (link) for more info."
                        />
                        <Accordion
                            id="1" 
                            title="What are benefits of holding Proof of Inu tokens?"
                            content="Holding Proof of Inu tokens  helps  investors to have early access to the ecosystem and future airdrops. Also, staking Proof of Inu tokens will generate passive income"
                        />
                        <Accordion
                            id="2" 
                            title="How to contact team members for marketing?"
                            content="Please send an email for marketing and proposals: admin@proofofinu.com
                            You can also contact us through our official Twitter and Telegram pages https://t.me/proofofinu"
                        />
                        <Accordion 
                            id="3"
                            title="What are the buy and sell taxes?"
                            content="The buying tax is 4%, while the selling tax is 6%."
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

function Accordion({title, content, id}){
    function handleClick(e){
        const selectedId = e.target.dataset.id;
        setTimeout(()=>{document.querySelector(`#${selectedId} p`).classList.toggle('scale-0');}, 100)
        document.querySelector(`#${selectedId} div`).classList.toggle('hidden');
        document.querySelector(`#${selectedId} i`).classList.toggle('rotate-180')
    }
    return(
        <div className="accordion" id={`dropdown-${id}`}>
            <button className="text-white text-left block w-full px-4 py-4 border-b-2">
                <i className="fa-solid fa-caret-down mr-8 transition-transform"></i> <span onClick={handleClick} data-id={`dropdown-${id}`} className="md:text-xl font-semibold">{title}</span>
            </button>
            <div className="bg-[#1A1919] overflow-hidden hidden border-b-2">
                <p className="p-6 leading-loose transition-transform scale-0">{content}</p>
            </div>
        </div>
    )
}

export default Faq