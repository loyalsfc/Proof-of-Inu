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
            <h4 data-aos="slide-in" className="text-[3rem] leading-[150%] font-bold text-center text-orange" id="features">Our Features</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
                <FeaturesItem 
                    img={bestsecurity}
                    title="Dollar-Cost Averaging (DCA) Strategy:"
                    content="Our DCA strategy is designed to help you navigate market volatility and reduce the impact of short-term price fluctuations. By investing a fixed amount at regular intervals, regardless of market conditions, the DCA strategy allows you to average out your purchase price over time. This approach helps you mitigate the risk of making large investments at unfavorable price points, providing a disciplined and long-term investment approach."
                />
                <FeaturesItem
                    img={decentralized}
                    title="Support and Resistance Breakout Strategy:"
                    content="With our support and resistance breakout strategy, we identify key price levels where the market has historically shown strong support or resistance. When the price breaks above a resistance level or below a support level, our trading bots automatically execute trades to capture potential price momentum. This strategy aims to capitalize on significant price movements and potential trend reversals."
                    />
                <FeaturesItem
                    img={immutablity}
                    title="Combined Super Trend Strategy:"
                    content="Our combined Super Trend strategy combines the power of trend-following and momentum indicators. By analyzing the prevailing market trends and momentum, our trading bots identify optimal entry and exit points. This strategy aims to capture sustained trends while minimizing exposure to false signals. With the combined Super Trend strategy, you can potentially benefit from both trending markets and volatile price movements."
                />
                <FeaturesItem
                    img={transparency}
                    title="Linear Regression Strategy:"
                    content="The Linear Regression strategy utilizes statistical analysis to identify the overall trend of an asset's price movement. By fitting a linear regression line to historical price data, our trading bots can estimate the future price direction and make informed trading decisions. This strategy helps you identify potential buying or selling opportunities based on the slope and direction of the regression line."
                />
                <FeaturesItem
                    img={concensus}
                    title="Supply and Demand Strategy:"
                    content="Our Supply and Demand strategy focuses on identifying areas of significant buying or selling pressure in the market. By analyzing supply and demand zones, our trading bots can pinpoint potential reversal points or areas of strong price continuation. This strategy enables you to make trades based on the principle that areas of high demand may lead to price increases, while areas of high supply may lead to price decreases."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Arbitrage Strategy:"
                    content="With our Arbitrage strategy, we capitalize on price discrepancies across different exchanges or trading pairs. By simultaneously buying an asset at a lower price and selling it at a higher price in another market, our trading bots aim to profit from the price differentials. This strategy requires quick execution and sophisticated order routing capabilities to seize profitable arbitrage opportunities in real-time."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Sandwich Strategy:"
                    content="The Sandwich strategy combines elements of mean reversion and trend-following techniques. It involves identifying periods of consolidation or range-bound price movement, followed by a breakout or significant trend reversal. Our trading bots monitor price patterns and execute trades when the asset's price breaks out of the consolidation phase. This strategy aims to capture both short-term price swings and potential longer-term trends."
                />
                <FeaturesItem
                    img={anonymous}
                    title="Scalper Strategy:"
                    content="Our Scalper strategy is specifically designed for traders looking to capitalize on short-term price fluctuations and take advantage of intraday trading opportunities. With this strategy, our trading bots aim to execute a high volume of quick trades to capture small, incremental profits."
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
