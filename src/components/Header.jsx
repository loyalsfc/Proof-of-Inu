import React from 'react'
import logo from '../assets/images/logo.png'

function Header() {
    function toggleMobileNav(){
        document.querySelector('.mobile-menu').classList.toggle('height-0')
    }

  return (
    <>
        <div className='mobile-menu fixed top-0 left-0 w-full h-screen flex flex-col md:flex-row md:items-center justify-center z-10 bg-black height-0 transition-all overflow-hidden '>
            <i class="fa-solid fa-xmark absolute right-4 top-4 text-white text-xl" onClick={toggleMobileNav}></i>
            <NavItems />
        </div>
        <header className='flex items-center justify-between py-6 px-4 md:px-6 position-sticky top-0'>
            <div className='flex items-center'>
                <img src={logo} alt="" className='h-12 mr-4' />
                {/* <span className='text-lg'>Proof of <span class="text-[#f79122]">INU</span></span> */}
            </div>
            <nav className='hidden lg:block'>
                <ul className='flex md:items-center text-sm flex-col md:flex-row'>
                    <a href="#introduction" className='nav'><li>Introduction</li></a>
                    <a href="#about" className='nav'><li>Why Turtle Bot</li></a>
                    <a href='#tokenomics' className='nav'><li>Tokenomics</li></a>
                    {/* <a href='#features' className='nav'><li>Features</li></a> */}
                    <a href='#roadmap' className='nav'><li>Roadmap</li></a>
                    <a href='#how-to-buy' className='nav'><li>How to buy</li></a>
                    {/* <a href='#faq' className='nav'><li>FAQ</li></a> */}
                    {/* <li className="social nav relative">Social  <i className="fa-solid fa-caret-down"></i>
                        <ul className='absolute hidden md:pt-2  social-links'>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href="https://twitter.com/proofofinuerc" className='my-2'>Twitter</a></li>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href='https://t.me/proofofinu'>Telegram</a></li>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href='https://medium.com/@proofofinu'>Medium</a></li>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href='https://github.com/Proof-of-Inu'>Github</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
            <a className='mx-10 md:mx-0 hidden lg:block' href=''>
                <button className='btn-outline'>Buy Now <i className="fa-solid fa-arrow-right"></i></button>
            </a>
            <i className="fa-solid fa-bars lg:hidden text-xl" onClick={toggleMobileNav}></i>
        </header>
    </>
  )
}

function NavItems(){
    return(
        <>
            <nav className=''>
                <ul className='flex md:items-center flex-col md:flex-row'>
                    <a href="#introduction" className='nav'><li>Introduction</li></a>
                    <a href="#about" className='nav'><li>Why Choose Turtle</li></a>
                    <a href='#tokenomics' className='nav'><li>Tokenomics</li></a>
                    {/* <a href='#features' className='nav'><li>Features</li></a> */}
                    <a href='#roadmap' className='nav'><li>Roadmap</li></a>
                    <a href='#how-to-buy' className='nav'><li>How to buy</li></a>
                    {/* <a href='#faq' className='nav'><li>FAQ</li></a> */}
                    {/* <li className="social nav relative">Social  <i className="fa-solid fa-caret-down"></i>
                        <ul className='absolute hidden md:pt-2 left-36 social-links'>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href="https://twitter.com/proofofinu?s=11&t=eskbO7CWl9mEzlalNc06zg" className='my-2'>Twitter</a></li>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href='https://t.me/proofofinu'>Telegram</a></li>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href='https://medium.com/@proofofinu'>Medium</a></li>
                            <li className='my-2 first:mt-0 last:mb-0 border-b'><a href='https://github.com/Proof-of-Inu'>Github</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
            <a className='mx-10 md:mx-0' href=''>
                <button className='btn-outline'>Buy Now <i className="fa-solid fa-arrow-right"></i></button>
            </a>
        </>
    )
}

export default Header
