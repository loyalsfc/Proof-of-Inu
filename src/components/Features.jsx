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
            <h4 data-aos="zoom-out-up" data-aos-duration="1500" className="text-[3rem] leading-[150%] font-bold text-center text-orange" id="features">Our Features</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
                <FeaturesItem 
                    img={bestsecurity}
                    title="DCA Turtle Strategy"
                    content="Our DCA Turtle strategy is designed to help you navigate market volatility and reduce the impact of short-term price fluctuations."
                />
                <FeaturesItem
                    img={decentralized}
                    title="SRB Turtle Strategy"
                    content="With our SRB Turtle strategy, we identify key price levels where the market has historically shown strong support or resistance."
                    />
                <FeaturesItem
                    img={immutablity}
                    title="Turtle Regression Strategy"
                    content="The Turtle Regression strategy utilizes statistical analysis to identify the overall trend of an asset's price movement."
                />
                <FeaturesItem
                    img={transparency}
                    title="Turtle Trendz Strategy"
                    content="Our Turtle Trendz strategy combines the power of trend-following and momentum indicators."
                />
                <FeaturesItem
                    img={concensus}
                    title="Supply and Demand Turtle Strategy"
                    content="Our Supply and Demand Turtle strategy focuses on identifying areas of significant buying or selling pressure in the market."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Turtle Arbitrage Strategy"
                    content="With our Arbitrage Turtle strategy, we capitalize on price discrepancies across different exchanges or trading pairs."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Sandwich Turtle Strategy:"
                    content="The Sandwich Turtle strategy combines elements of mean reversion and trend-following techniques."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Scalper Turtle Strategy"
                    content="Our Scalper Turtle  strategy is specifically designed for traders looking to capitalize on short-term price fluctuations and take advantage of intraday trading opportunities."
                />
            </div>
        </section >
    )
}

function FeaturesItem({img, title, content}){
    return(
    <div data-aos="zoom-in" className='backdrop-blur shadow shadow-orange p-4 md:px-8 border border-[#ffffff17] rounded-2xl bg-transparent text-poppin hover:scale-[1.05] hover:shadow-lg hover:shadow-orange bg-[#080808]'>
        {/* <div className='h-[150px]'>
            <img src={img} alt="" className='h-full mx-auto'/>
        </div> */}
        <h3 className='my-4 text-[1.5rem] md:text-xl text-orange font-medium leading-[120%] text-center'>{title}</h3>
        <p className='font-poppin'>{content}</p>
    </div>
    )
}

export default Features
