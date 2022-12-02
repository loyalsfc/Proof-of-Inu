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
                    <li className='nav'>About</li>
                    <li className='nav'>Tokenomics</li>
                    <li className='nav'>Roadmap</li>
                    <li className='nav'>Team</li>
                    <li className='nav'>How to buy</li>
                </ul>
            </nav>
            <button className='btn-outline'>Buy Now <i className="fa-solid fa-arrow-right"></i></button>
        </header>
  )
}

export default Header
