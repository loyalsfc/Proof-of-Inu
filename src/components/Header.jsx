import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
        <header className='flex items-center justify-between py-6 position-sticky top-0'>
            <div>
                <img src={logo} alt="" className='h-12' />
            </div>
            <nav>
                <ul className='flex items-center'>
                    <a href="#about" className='nav'><li>About</li></a>
                    <a href="#utilities" className='nav'><li>Utilities</li></a>
                    <a href='#tokenomics' className='nav'><li>Tokenomics</li></a>
                    <a href='#features' className='nav'><li>Features</li></a>
                    <a href='#roadmap' className='nav'><li>Roadmap</li></a>
                    <a href='#how-to-buy' className='nav'><li>How to buy</li></a>
                    <a href='#faq' className='nav'><li>FAQ</li></a>
                    <li className="nav">Social </li>
                </ul>
            </nav>
            <a href='https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xA56B5C6162c7311D86d5AbC66E4b29a283392117'>
                <button className='btn-outline'>Buy Now <i className="fa-solid fa-arrow-right"></i></button>
            </a>
        </header>
  )
}

export default Header
