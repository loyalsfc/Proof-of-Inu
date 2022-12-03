import React from 'react'
import bgImage from '../assets/bg-image.png'

function Roadmap() {
    function showItem(id){
        document.querySelectorAll('.roadmap-item').forEach(item=>{
            item.classList.remove('active');
        })
        document.getElementById(id).classList.add('active');
    }

    return (
        <div className='mb-[100px] relative' id='roadmap'>
            <h3 className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>Roadmap</h3>
            <div className='flex relative before:content-[""] before:absolute before:top-5 before:-z-10 before:block before:w-full before:h-0.5 before:bg-white/[0.3]'>
                <img src={bgImage} alt="" className='absolute top- left-[0%] opacity-10 scale-[2] -z-10'/>
                <div className='w-1/4 roadmap-item active' id="phase-1">
                    <button onClick={()=>showItem('phase-1')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302] z-10'>Phase 1</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 1: Launch</h4>
                        <ul className='list-disc px-4'>
                            <li>INUSCAN</li>
                            <li>5,000 HOLDERS</li>
                            <li>CEX LISTINGS</li>
                            <li>PRESS RELEASES</li>
                            <li>25,000 TELEGRAM MEMBERS</li>
                            <li>INUSWAP</li>
                            <li>GIVEWAYS</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 roadmap-item' id="phase-2">
                    <button onClick={()=>showItem('phase-2')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302]'>Phase 2</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 2: Growth</h4>
                        <ul className='list-disc px-4'>
                            <li>EXPAND BLOCKCHAIN</li>
                            <li>DEVELOPMENT TEAM.</li>
                            <li>DEXT LISTING.</li>
                            <li>2000 HOLDERS</li>
                            <li>EXPAND MARKETING TEAMS.</li>
                            <li>ADDITIONAL PARTNERSHIP</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 roadmap-item' id="phase-3">
                    <button onClick={()=>showItem('phase-3')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302]'>Phase 3</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 3: Stable</h4>
                        <ul className='list-disc px-4'>
                            <li>INUSCAN</li>
                            <li>5,000 HOLDERS</li>
                            <li>CEX LISTINGS</li>
                            <li>PRESS RELEASES</li>
                            <li>25,000 TELEGRAM MEMBERS</li>
                            <li>INUSWAP</li>
                            <li>GIVEWAYS</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/4 roadmap-item' id="phase-4">
                    <button onClick={()=>showItem('phase-4')} className='opacity-50 transition-all border-2 py-2 px-4 mx-auto mb-12 block font-medium bg-[#000302]'>Phase 4</button>
                    <div className='opacity-0 transition-all'>
                        <h4 className='text-2xl mb-3 '>Phase 4: Expansion</h4>
                        <ul className='list-disc px-4'>
                            <li>EXPAND BLOCKCHAIN DEVELOPMENT TEAM.</li>
                            <li>DEXT LISTING.</li>
                            <li>2000 HOLDERS</li>
                            <li>EXPAND MARKETING TEAMS.</li>
                            <li>ADDITIONAL PARTNERSHIP</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Roadmap
