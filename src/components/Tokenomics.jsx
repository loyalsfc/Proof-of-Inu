import React from 'react'
import bg from '../assets/tokenomics.png'

function Tokenomics() {
  return (
        <section className='flex flex-col lg:flex-row relative mb-[100px]' id='tokenomics'>
            <div className="bg-[#FDA005] h-[682px] w-[682px] hidden rounded-full absolute blur-[400px] -right-[341px] -top-[100px]"></div>
            <div className='max-w-[565px] p-2 mb-8 md:mb-0'>
                <h3 data-aos="slide-down" className='text-[2rem] md:text-[3rem] leading-[120%] font-bold'>Our unique Tokenomics are not to be overlooked</h3>
                <p data-aos="zoom-in" className='py-4 text-lg leading-[150%] text-[#a2aabb] font-poppin'>$PROOFOFINU is available for trading on Uniswap, one of the largest decentralized exchanges in the world, with more listings to follow in the future as we expand.</p>
                <a data-aos="fade-in" href="https://drive.google.com/file/d/1CeWa1pdFfjxGE_JTze0PDCKHTbjxhjuf/view">
                <button className='py-3 px-12 border-2 border-orange font-semibold text-lg hover:bg-orange hover:text-black rounded-lg'>White Paper <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
                </a>
            </div>
            <div className='relative lg:w-1/2' data-aos="flip-up">
                <img src={bg} className="w-3/4 mx-auto" alt="" />
                <div className='tokenomics-item right-2 md:right-4 top-10'>
                    <h3 className='text-xs sm:text-[1.5rem] font-semibold text-white leading-[130%]'>1 Billion </h3>
                    <p className='tokenomics-content'>Initial Supply</p>
                </div>
                <div className='tokenomics-item left-2 md:left-4 top-10'>
                    <h3 className='text-xs sm:text-[1.5rem] font-bold text-white leading-[130%]'>1 Billion </h3>
                    <p className='tokenomics-content'>Maximum Supply </p>
                </div>
                    <div className='tokenomics-item left-2 md:left-4 bottom-10'>
                        <h3 className='text-xs sm:text-[1.5rem] font-bold text-white leading-[130%]'>6%</h3>
                        <p className='tokenomics-content'>Buy Tax</p>
                    </div>
                    <div className='tokenomics-item right-4 bottom-10'>
                        <h3 className='text-xs sm:text-[1.5rem] font-bold text-white leading-[130%]'>4%</h3>
                        <p className='tokenomics-content'>Sell Tax</p>
                    </div>
            </div>
        </section>
  )
}

export default Tokenomics
