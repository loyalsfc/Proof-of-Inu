import React from 'react'
import logo from '../assets/logo-1.png'

function Footer() {
    return (
        <footer className='border-t py-4 text-center md:text-left'>
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start  gap-4">
                <div className='flex items-center'>
                    <img src={logo} alt="" className='h-12 mr-4' />
                    <span className='text-lg'>Proof of <span class="text-[#f79122]">INU</span></span>
                </div>
                <div className='md:ml-auto mr-4'>
                    <h4 className='font-semibold '>About</h4>
                    <ul className='text-sm font-poppin'>
                        <a href="#utilities" className='my-2'><li>Utilities</li></a>
                        <a href='#tokenomics' className='my-2'><li>Tokenomics</li></a>
                        <a href='#roadmap' className='my-2'><li>Roadmap</li></a>
                        <a href='#how-to-buy' className='my-2'><li>How to buy</li></a>
                        <a href='#faq' className='my-2'><li>FAQ</li></a>
                    </ul>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h4 className='font-semibold '>Social</h4>
                    <ul className='text-sm font-poppin'>
                        <a href="https://twitter.com/proofofinuerc"  target="_blank" className='my-2'><li>Twitter <i className="fa-brands fa-twitter"></i></li></a>
                        <a href='https://t.me/proofofinu' target="_blank" className='my-2'><li>Telegram <i className="fa-brands fa-telegram"></i></li></a>
                        <a href='https://medium.com/@proofofinu' target="_blank" className='my-2'><li>Medium <i class="fa-brands fa-medium"></i></li></a>
                        <a href='https://github.com/Proof-of-Inu' target="_blank" className='my-2'><li>GitHub <i class="fa-brands fa-github"></i></li></a>
                    </ul>
                </div>
            </div>
            <p className='text-center text-xs'>© The Proof of Inus. All rights reserved.</p>
        </footer>
    )
}

export default Footer
