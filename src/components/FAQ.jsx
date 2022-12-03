function Faq(){

    return(
        <>
            <main className="mb-[100px]" id="faq">
                <div className="container mx-auto text-white mb-8">
                    <div className="flex items-center justify-center">
                        <div>
                        <h3 className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>Frequently Ask Question</h3>
                            <p className="text-lg">Get more information on how our exchange platform works, and get answers to your questions </p>
                        </div>
                        {/* <div className="h-56">
                            <img src={image} className="h-full hidden lg:block" />
                        </div> */}
                    </div>
                    <div className="w-full mx-2 md:w-2/3 md:mx-auto mt-8 bg-primary-blue p-8 rounded-3xl">
                        <Accordion
                            id="0"
                            title="Lorem Ipsum Atet?"
                            content="Aenean sed mattis odio, nec posuere sem. Pellentesque facilisis egestas elit, id pulvinar leo ullamcorper in. Mauris placerat justo ac mollis ultrices"
                        />
                        <Accordion
                            id="1" 
                            title="Lorem Ipsum Atet?"
                            content="Aenean sed mattis odio, nec posuere sem. Pellentesque facilisis egestas elit, id pulvinar leo ullamcorper in. Mauris placerat justo ac mollis ultrices"
                        />
                        <Accordion
                            id="2" 
                            title="Lorem Ipsum Atet?"
                            content="Aenean sed mattis odio, nec posuere sem. Pellentesque facilisis egestas elit, id pulvinar leo ullamcorper in. Mauris placerat justo ac mollis ultrices"
                        />
                        <Accordion 
                            id="3"
                            title="Lorem Ipsum Atet?"
                            content="Aenean sed mattis odio, nec posuere sem. Pellentesque facilisis egestas elit, id pulvinar leo ullamcorper in. Mauris placerat justo ac mollis ultrices"
                        />
                        <Accordion 
                            id="4"
                            title="Lorem Ipsum Atet?"
                            content="Aenean sed mattis odio, nec posuere sem. Pellentesque facilisis egestas elit, id pulvinar leo ullamcorper in. Mauris placerat justo ac mollis ultrices"
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
                <i className="fa-solid fa-caret-down mr-8 transition-transform"></i> <span onClick={handleClick} data-id={`dropdown-${id}`} className="text-xl font-semibold">{title}</span>
            </button>
            <div className="bg-[#1A1919] overflow-hidden hidden border-b-2">
                <p className="p-6 leading-loose transition-transform scale-0">{content}</p>
            </div>
        </div>
    )
}

export default Faq