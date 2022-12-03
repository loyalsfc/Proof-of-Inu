import React from 'react'

function Tokenomics() {
  return (
        <section className='flex relative mb-[100px]' id='tokenomics'>
            <div className="bg-[#FDA005] h-[682px] w-[682px] hidden md:block rounded-full absolute blur-[400px] -right-[341px] -top-[100px]"></div>
            <div className='max-w-[565px]'>
                <h3 className='text-[3rem] leading-[150%] font-bold'>Our unique Tokenomics are not to be overlooked</h3>
                <p className='py-4 text-xl leading-[150%] color-[#a2aabb]'>$PROOFOFINU is available for trading on Uniswap, one of the largest decentralized exchanges in the world, with more listings to follow in the future as we expand.</p>
                <a href="https://drive.google.com/file/d/1CeWa1pdFfjxGE_JTze0PDCKHTbjxhjuf/view">
                <button className='py-3 px-12 border-2 font-semibold text-lg hover:bg-white hover:text-black rounded-lg'>White Paper <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
                </a>
            </div>
            <div className='relative w-1/2 pt-[10em]'>
                <div className='absolute right-4 top-10 z-10 flex flex-col justify-center initial text-center backdrop-blur w-[16em] h-[10em] border border-[#ffffff17] rounded-[35px] bg-transparent '>
                    <h3 className='text-[2rem] font-bold text-white leading-[130%]'>1 Billion </h3>
                    <p className='color-[#a2aabb] pt-1'>Initial Supply</p>
                </div>
                <div className='mx-auto backdrop-blur-[0.5em] w-[24em] h-[11em] flex flex-col mb-10 justify-center text-center initial'>
                    <h3 className='text-[2rem] font-bold text-white leading-[130%]'>1,000,000,000,000 </h3>
                    <p className='color-[#a2aabb] pt-1'>Maximum Supply  Supply</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className='flex flex-col justify-center initial text-center backdrop-blur w-[16em] h-[10em] border border-[#ffffff17] rounded-[35px] bg-transparent '>
                        <h3 className='text-[2rem] font-bold text-white leading-[130%]'>6%</h3>
                        <p className='color-[#a2aabb] pt-1'>Buy Tax</p>
                    </div>
                    <div className='flex flex-col justify-center initial text-center backdrop-blur w-[16em] h-[10em] border border-[#ffffff17] rounded-[35px] bg-transparent '>
                        <h3 className='text-[2rem] font-bold text-white leading-[130%]'>4%</h3>
                        <p className='color-[#a2aabb] pt-1'>Sell Tax</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Tokenomics
