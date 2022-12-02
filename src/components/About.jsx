import React from 'react'
import holder from '../assets/hold.png'

function About() {
  return (
        <article className='max-w-[1040px] mx-auto mb-[100px]'>
            <h2 className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>ABOUT</h2>
            <div>
                <AboutItems
                    article="Shiba rose to become the face of the memecoin
                    world, Proof of Inu is the Shib 2.0
                    Proof of Inu, AKA Shib 2.0 of meme coins is an
                    ERC20 token that was launched to gain support for
                    a meme community of degens."
                    img={holder}
                />
                <AboutItems
                    article="Buying Proof of Inu AKA Shib 2.0 helps you to have
                    early access to the ecosystem and our future
                    airdrops.
                    We are the blockchain of all Inu tokens, the leader of
                    the degens to the moon."
                    img={holder}
                    inverse={"flex-row-reverse"}
                />
                <AboutItems
                    article="We are the blockchain of all Inu tokens. A layer 2
                    blockchain for all memecoins.
                    We focus on safety of tokens launched on proof of
                    inu and we make sure tokens on our chain are safe."
                    img={holder}
                />
            </div>
        </article>
  )
}

function AboutItems({article, img, inverse}){
    return(
        <div className={'flex items-center justify-between mb-10 '  + inverse}>
            <p className='text-xl w-1/2 leading-[200%]'>{article}</p>
            <img src={img} alt="image" className='h-[350px]'/>
        </div>
    )
}

export default About
