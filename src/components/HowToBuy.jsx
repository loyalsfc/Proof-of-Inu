import React from 'react'
import bgImage from '../assets/bg-image.png'
import howToBuyImage from '../assets/bg/howtobuy.jpeg'

function HowToBuy() {
    return (
        <div className='z-10 pb-[100px] text-center overflow-hidden sm:pt-20 relative px-4' id='how-to-buy'>
            <img src={howToBuyImage} alt="" className='absolute bottom-0 md:left-0 w-full opacity-30 -z-10'/>
            <h3 data-aos="flip-left" data-aos-duration="1500" className='text-3xl sm:text-[3rem] leading-[120%] mb-4 text-orange font-bold text-center'>How To Buy</h3>
            <div className='max-w-[700px] px-2 mx-auto'>
                <article data-aos="zoom-out" className='mb-8'>
                    <h3 className='text-2xl font-semibold my-4'>Step One - Buy and Transfer ETH</h3>
                    <p className='text-base font-poppin leading-[150%]'> Buy ETH from a centralized exchange such as Binance, Coinbase, Hotbit, Crypto.com, etc. Transfer the ETH from the centralized exchange to a wallet like MetaMask or Trust Wallet.
                    </p>
                </article>
                <article data-aos="zoom-out" data-aos-delay="300" className='mb-8'>
                    <h3 className='text-2xl font-semibold my-4 break-words'>Step Two - Connect to Uniswap</h3>
                    <p className='font-poppin word-wrapping'>First click on the Swap Tokens button in the bottom right of your screen. In the top right, press connect wallet.
                    Ensure you are swapping from ETH to $TURTLE, if it doesn't autofill, paste the contract: 0xxxxxxxxx0x0x0x0xxxxxx000000</p>
                </article>
                <article data-aos="zoom-out" data-aos-delay="600" className=''>
                    <h3 className='text-2xl font-semibold my-4'>Step Three - Swap ETH to $TURTLE</h3>
                    <p className='font-poppin'>Click on the gear in the top right of the Swap box, and set slippage.
                        Simply click swap, confirm on your wallet and you now have $TURTLE!.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default HowToBuy
