import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <footer className='border-t py-4'>
            <div className="container mx-auto flex items-start gap-4">
                <img src={logo} alt="Logo" className='w-[182px]'/>
                <div className='ml-auto'>
                    <h4 className='font-semibold '>About</h4>
                    <ul className='text-sm'>
                        <a href="#utilities" className='my-2'><li>Utilities</li></a>
                        <a href='#tokenomics' className='my-2'><li>Tokenomics</li></a>
                        <a href='#roadmap' className='my-2'><li>Roadmap</li></a>
                        <a href='#how-to-buy' className='my-2'><li>How to buy</li></a>
                        <a href='#faq' className='my-2'><li>FAQ</li></a>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold '>Social</h4>
                    <ul className='text-sm'>
                        <a href="https://twitter.com/proofofinu?s=11&t=eskbO7CWl9mEzlalNc06zg" className='my-2'><li>Twitter <i className="fa-brands fa-twitter"></i></li></a>
                        <a href='https://t.me/proofofinu' className='my-2'><li>Telegram <i className="fa-brands fa-telegram"></i></li></a>
                        <a href='https://medium.com/@proofofinu' className='my-2'><li>Medium <i class="fa-brands fa-medium"></i></li></a>
                        <a href='https://github.com/Proof-of-Inu' className='my-2'><li>GitHub <i class="fa-brands fa-github"></i></li></a>
                    </ul>
                </div>
            </div>
            <p className='text-center text-xs'>© The Proof of Inus. All rights reserved.</p>
        </footer>
    )
}

export default Footer
