import React from 'react'
import { FaChartLine, FaHandHoldingUsd, FaRobot, FaTint, FaUsers } from "react-icons/fa";

import bg from '../assets/tokenomics.png'

function Tokenomics() {
  return (
        <section className='relative mb-[100px] bg-tokenomics bg-cover py-16 bg-fixed' id='tokenomics'>
            {/* <div className="bg-[#FDA005] h-[682px] w-[682px] hidden rounded-full absolute blur-[400px] -right-[341px] -top-[100px]"></div> */}
            <div className='container mx-auto px-4'>
                <h2 data-aos="flip-up" data-aos-duration="1500" className='text-4xl uppercase text-center font-medium mb-8 text-orange'>Tokenomics</h2>
                <article data-aos="fade-up" data-aos-duration="1200" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-12'>
                <Card 
                    Icon={FaTint}
                    title="Initial Liquidity Pool"
                    percentage = {30}
                    text= "30,000,000,000"
                />
                <Card
                    Icon={FaRobot}
                    title = "Trade Bot Company Treasury"
                    percentage = {15}
                    text = "15,000,000,000"
                />
                <Card
                    Icon={FaUsers}
                    title = "Community Incentives and Rewards"
                    percentage = {20}
                    text = "20,000,000,000"
                />
                <Card
                    Icon={FaHandHoldingUsd}
                    title= "Development and Partnerships"
                    percentage = {15}
                    text = "15,000,000,000"
                />
                <Card
                    Icon={FaChartLine}
                    title = "Marketing and Promotion"
                    percentage = {10}
                    text = "10,000,000,000"
                />
                <Card
                    Icon={FaUsers}
                    title = "Team and Advisors"
                    percentage = {5}
                    text = "5,000,000,000"
                />
                    </article>
            </div>
        </section>
  )
}

function Card({Icon, title, text, percentage}){
    return(
        <div className='relative'>
            <div className='-z-[1] absolute h-full w-full bg-radial rounded-[11px] blur-sm top-0 left-0'/>
            <div className="bg-radial-cover p-px rounded-[11px] h-full">
                <div className='bg-main-dark hover:opacity-90 transition-all h-full cursor-default relative p-4 rounded-[11px] text-center'>
                    <p className='text-4xl text-center flex justify-center mb-3 text-orange'><Icon /></p>
                    <h3 className='mb-2 text-lg family-violet'>
                        {title}
                    </h3>
                    <p className='leading-loose text-sm '>{text} Tokens</p>
                    <p className='text-sm'>{percentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
