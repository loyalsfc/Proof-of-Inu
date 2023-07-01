import React from 'react'
import holder from '../assets/hold.png'

function About() {
  return (
        <article className='max-w-[1040px] mx-auto mb-[100px]' id='about'>
            <h2 className='text-2xl text-orange sm:text-3xl text-center w-fit p-5 sm:px-10 mx-auto relative family-violet sm:mb-8 lg:mb-0'>
                <p data-aos-duration="1500" data-aos="zoom-in-up">WHY CHOOSE TURTLE BOT?</p>
            </h2>
            {/* <h2 data-aos="zoom-out" className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>ABOUT</h2> */}
            <div className='font-poppin leading-[150%] p-2'>
                <p data-aos="fade-in" data-aos-delay="300" className='mb-4 leading-loose'>Advanced Technology: Our team of experienced developers and financial experts leverages the latest advancements in artificial intelligence and machine learning to create state-of-the-art trading bots. We combine sophisticated algorithms with real-time market data to make intelligent trading decisions.</p>
                {/* <p data-aos="fade-in" className='mb-4'>Shiba rose to become the face of the memecoin world. Proof of Inu is the Shib 2.0 Proof of Inu of meme coins. Proof of Inu is an ERC20 token built for a meme community of degens.</p> */}
                {/* <p data-aos="fade-in" data-aos-delay="300" className='mb-4'>Buying Proof of Inu AKA Shib 2.0 helps investors to have early access to the ecosystem and future airdrops. We are the blockchain of all Inu tokens, the leader of the degens. Proof of Inu is a layer 2 blockchain for all memecoins.  Proof of Inu's main focus is to ensure tokens on its chain are safe.</p> */}
                {/* <p data-aos="fade-in" data-aos-delay="900">Proof of Inu is the blockchain based on the "proof of stake", “proof of authority", "proof of honesty" consensus mechanisms.</p> */}
            </div>
        </article>
  )
}

function AboutItems({article, img, inverse}){
    return(
        <div className={'flex items-center flex-col-reverse justify-between mb-10 '  + inverse}>
            <p className='text-xl md:w-1/2 leading-[200%]'>{article}</p>
            <img src={img} alt="image" className='h-[350px]'/>
        </div>
    )
}

export default About
