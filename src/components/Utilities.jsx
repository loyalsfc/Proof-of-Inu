import React from 'react'
import safety from '../assets/images/strategies.png'
import doa from '../assets/images/performance.png'
import launching from '../assets/images/friendly.png'
import smartcontract from '../assets/images/support.png'

function Utilities() {
    const moveLeft = () => {
        let containerWidth = document.querySelector('.utility').clientWidth
        document.querySelector('.utility').scrollLeft += (containerWidth * 0.66 );
    };
    const moveRight = () => {
        document.querySelector('.utility').scrollLeft -= 120;
    };

    return (
        <section className='pb-[100px]' id='utilities'>
            <h2 data-aos="slide-up" className='text-xl px-2 md:text-[3rem] leading-[120%] mb-4 font-bold flex items-center justify-between'>
            <div className='flex justify-between'>
                    <button id='moveleft' onClick={moveRight} className='h-12 w-12 mr-2 rounded-full bg-white/[0.05] text-2xl flex items-center justify-center'><i class="fa-solid fa-caret-left"></i></button>
                    <button id='moveright' onClick={moveLeft} className='h-12 w-12 rounded-full bg-white/[0.05] text-2xl flex items-center justify-center'><i class="fa-solid fa-caret-right"></i></button>
            </div>
            </h2>
            <div data-aos="zoom-in" className='utility flex flex-nowrap gap-8 p-2 overflow-x-scroll transition-all'>
                <UtilitiesList
                    img={safety}
                    title="Tailored Strategies"
                    content="At Turtle Bots, we understand that every trader is unique. That's why we offer customizable trading strategies to suit your individual preferences and risk tolerance. Whether you're a beginner or an experienced trader, our bots can adapt to your specific needs and help you achieve your trading goals."
                />
                <UtilitiesList
                    img={doa}
                    title="Reliable Performance"
                    content="Our trading bots undergo rigorous testing and optimization to ensure reliable and consistent performance. We meticulously monitor market conditions and adjust our algorithms accordingly to adapt to changing trends and seize profitable opportunities."
                />
                <UtilitiesList
                    img={launching}
                    title="User-Friendly Interface"
                    content="We believe that technology should be accessible to everyone. With our user-friendly interface, even those without extensive technical knowledge can easily navigate our platform and deploy trading bots with a few simple clicks. Experience hassle-free trading automation at your fingertips."
                />
                <UtilitiesList
                    img={smartcontract}
                    title="Comprehensive Support"
                    content="At Turtle Bots, we prioritize customer satisfaction. Our dedicated support team is available to assist you at every step of your trading journey. Whether you have questions about setting up your bots, optimizing your strategies, or navigating our platform, we're here to help."
                />
            </div>
        </section>
    )
}

function UtilitiesList({img, title, content}){
    return(
        <div className='relative w-2/3 md:w-2/5 color-[#d4dce3] grid grid-rows-[auto] gap-2.5 p-4 bg-white/[0.05] backdrop-blur rounded-lg hover:scale-[1.05] transition-all shrink-0 pb-24'>
            <article className='text-left right-0 bottom-0'>
                <h4 className='text-[22px] mb-2.5 font-semibold text-orange'>{title}</h4>
                <p className='font-poppin'>{content}</p>
                <div className='h-20 w-20 absolute right-0 rounded-full overflow-hidden mx-auto'>
                    <img src={img} alt="" className=''/>
                </div>
            </article>
        </div>
    )
}

export default Utilities
