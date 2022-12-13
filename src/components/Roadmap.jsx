import React from 'react'
import bgImage from '../assets/utilities/bgstar.mp4'

function Roadmap() {
    function showItem(id){
        document.querySelectorAll('.roadmap-item').forEach(item=>{
            item.classList.remove('active');
        })
        document.getElementById(id).classList.add('active');
    }

    return (
        <div className='mb-[100px] relative overflow-hidden py-8' id='roadmap'>
            <video src={bgImage} className="absolute hidden" autoPlay muted loop></video>
            <h3 data-aos="zoom-in" className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>Roadmap</h3>
            <div data-aos="slide-up" className='flex relative before:content-[""] before:absolute before:top-5 before:-z-10 before:block before:w-full before:h-0.5 before:bg-white/[0.3]'>
                <div className='my-12 flex justify-between border hidden'>
                    <button className='h-12 w-12 rounded-full bg-white/[0.05] text-2xl flex items-center justify-center'><i class="fa-solid fa-caret-left"></i></button>
                    <button className='h-12 w-12 rounded-full bg-white/[0.05] text-2xl flex items-center justify-center'><i class="fa-solid fa-caret-right"></i></button>
                </div>
                <div className='w-1/4 roadmap-item active' id="phase-1">
                    <button onClick={()=>showItem('phase-1')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302] z-10'>Phase 1</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 1: Launch</h4>
                        <ul className='list-disc px-4'>
                            <li>INUSCAN</li>
                            <li>PRESS RELEASES </li>
                            <li>HOST COMMUNITY CONTESTS </li>
                            <li>PAID AND UNPAID MARKETING </li>
                            <li>TESTNET RELEASE</li>
                            <li>CG & CMC LISTING</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 roadmap-item' id="phase-2">
                    <button onClick={()=>showItem('phase-2')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302]'>Phase 2</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 2: Growth</h4>
                        <ul className='list-disc px-4'>
                            <li>INUSWAP</li>
                            <li>MAINNET RELEASE</li>
                            <li>EXPAND THE CORE TEAM</li>
                            <li>MARKETING CAMPAIGNS </li>
                            <li>CEX LISTINGS</li>
                            <li>PARTNERSHIPS WITH CRYPTO PROJECTS </li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 roadmap-item' id="phase-3">
                    <button onClick={()=>showItem('phase-3')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302]'>Phase 3</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 3: Stable</h4>
                        <ul className='list-disc px-4'>
                            <li>TOP TIER 1 & 2 CEX LISTINGS</li>
                            <li>PR AND INFLUENCER MARKETING</li>
                            <li>LAUNCH STAKING PLATFORM </li>
                            <li>FURTHER COLLABORATION WITH CRYPTO PROJECTS </li>
                            <li>GROW THE CORE TEAM AND LOCAL COMMUNITIES </li>
                            <li>COMMUNITY AND TRADING CONTESTS </li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 roadmap-item' id="phase-4">
                    <button onClick={()=>showItem('phase-4')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302]'>Phase 4</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 4: Expansion</h4>
                        <ul className='list-disc px-4'>
                            <li>LAUNCH DAO FOR DEGENS</li>
                            <li>LAUNCH OUR OWN DECENTRALIZED EXCHANGE (DEX)</li>
                            <li>LAUNCH THE ON-CUSTODIAL – SHIB 2.0 CRYPTO WALLET</li>
                            <li>CREATE AN NFT MARKETPLACE</li>
                            <li>TOP TIER 1 CEX LISTINGS</li>
                            <li>MASSIVE MARKETING CAMPAIGNS AND REWARD HOLDERS</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Roadmap
