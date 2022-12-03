import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <footer className='border-t py-4'>
            <div className="container mx-auto">
                <img src={logo} alt="Logo" className='w-[182px]'/>

                <p className='text-center text-xs'>© The Proof of Inus. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
