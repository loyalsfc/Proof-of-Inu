import React from 'react'
import holder from '../assets/hold.png'

function About() {
  return (
        <article className='max-w-[1040px] mx-auto mb-[100px]' id='about'>
            <h2 data-aos="zoom-out" className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>ABOUT</h2>
            <div className='font-poppin leading-[150%] p-2'>
                    <p data-aos="fade-in" className='mb-4'>
                    Shiba rose to become the face of the memecoin
                    world, Proof of Inu is the Shib 2.0
                    Proof of Inu, AKA Shib 2.0 of meme coins is an
                    ERC20 token that was launched to gain support for
                    a meme community of degens.
                    </p>
                    <p data-aos="fade-in" data-aos-delay="500" className='mb-4'>
                    Buying Proof of Inu AKA Shib 2.0 helps you to have
                    early access to the ecosystem and our future
                    airdrops.
                    We are the blockchain of all Inu tokens, the leader of
                    the degens to the moon.
                    </p>
                    <p data-aos="fade-in" data-aos-delay="1000" className='mb-4'>
                    We are the blockchain of all Inu tokens. A layer 2
                    blockchain for all memecoins.
                    We focus on safety of tokens launched on proof of
                    inu and we make sure tokens on our chain are safe.
                    </p>
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
