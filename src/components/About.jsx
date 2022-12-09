import React from 'react'
import holder from '../assets/hold.png'

function About() {
  return (
        <article className='max-w-[1040px] mx-auto mb-[100px]' id='about'>
            <h2 data-aos="zoom-out" className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>ABOUT</h2>
            <div className='font-poppin leading-[150%] p-2'>
                    <p data-aos="fade-in" className='mb-4'>
                    Shiba rose to become the face of the memecoin world. Proof of Inu is the Shib 2.0 Proof of Inu of meme coins.  Proof of Inu is an ERC20 token built for a meme community of degens.
                    </p>
                    <p data-aos="fade-in" data-aos-delay="300" className='mb-4'>
                    Buying Proof of Inu AKA Shib 2.0 helps investors/holders to have
                    early access to the ecosystem and future
                    airdrops.
                    We are the blockchain of all Inu tokens, the leader of
                    the degens.
                    </p>
                    <p data-aos="fade-in" data-aos-delay="600" className='mb-4'>
                    We are the blockchain of all Inu tokens. A layer 2
                    blockchain for all memecoins.
                    We focus on safety of tokens launched on Proof of
                    Inu and we make sure tokens on our chain are safe.
                    </p>
                    <p data-aos="fade-in" data-aos-delay="900">PROOF OF INU IS THE BLOCKCHAIN BASED ON THE "PROOF OF STAKE", PROOF OF Authority", "PROOF OF History" CONSENSUS MECHANISMS.</p>
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
