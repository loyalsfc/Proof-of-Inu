import React from 'react'

import anonymous from "../assets/features/anonymous.jpg"
import bestsecurity from "../assets/features/best-security.jpg"
import concensus from "../assets/features/concensus-algorithm.jpg"
import immutablity from "../assets/features/data-immutability.jpg"
import decentralized from "../assets/features/decentralized-system.jpg"
import transparency from "../assets/features/transparency.jpg"


function Features() {
    return (
        <section >
            <h4 data-aos="slide-in" className="text-[3rem] leading-[150%] font-bold text-center" id="features">Our Features</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
                <FeaturesItem 
                    img={bestsecurity}
                    title="Best Security"
                    content="Blockchain technology is considered more
                    secure than its contemporaries because of
                    lack of a single point of failure."
                />
                <FeaturesItem
                    img={decentralized}
                    title="Decentralized System"
                    content="Decentralised technology gives you the power
                    to store your assets in a network without the
                    oversight and control of a single person
                    organisation or entity."
                    />
                <FeaturesItem
                    img={immutablity}
                    title="Data Immutability"
                    content="It ensures that no data is corrupted. How this
                    works is that every node on the system has a copy
                    of the ledger. So, to alter any data, there must be
                    a unanimous agreement of every node. This makes
                    blockchain secure and transparent."
                />
                <FeaturesItem
                    img={transparency}
                    title="Transparency"
                    content="Every transaction, be it tangible or non-
                    tangible, can be traced from the start to the finish with blockchain."
                />
                <FeaturesItem
                    img={concensus}
                    title="Consensus Algorithm"
                    content="For a transaction to be accepted and
                    recorded on the blockchain, all the
                    participants or nodes must agree to follow
                    the same rules."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Anonymous"
                    content="It is true that every transaction is transparent
                    and open to the public, but the actual persons are
                    kept anonymous through the addresses. For
                    example, suppose a person sends a sum of money,
                    the receiver will know that the sender is linked to
                    a bitcoin address, but they will not know the
                    actual address. There are several reasons for
                    this – one of them is privacy."
                />
            </div>
        </section >
    )
}

function FeaturesItem({img, title, content}){
    return(
    <div data-aos="zoom-in" className='backdrop-blur shadow shadow-orange py-4 px-8 border border-[#ffffff17] rounded-2xl bg-transparent text-poppin hover:scale-[1.05] hover:shadow-lg hover:shadow-orange bg-[#080808]'>
        <div className='h-[150px]'>
            <img src={img} alt="" className='h-full mx-auto'/>
        </div>
        <h3 className='my-4 text-[1.5rem] md:text-xl font-medium leading-[120%] text-center'>{title}</h3>
        <p className='font-poppin'>{content}</p>
    </div>
    )
}

export default Features
