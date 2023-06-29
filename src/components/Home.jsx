import React from 'react'
import Header from './Header'
import img from '../assets/new_cryptocurrency.png'
import About from './About'
import Utilities from './Utilities'
import Tokenomics from './Tokenomics'
import Counter from './Counter'
import Roadmap from './Roadmap'
import HowToBuy from './HowToBuy'
import Footer from './Footer'
import Faq from './FAQ'
import herobg from '../assets/utilities/starringnobg.webm'
import Features from './Features'
import newBg from '../assets/utilities/usebg.png'
import herovideo from '../assets/aiturtlee.mp4'


function Home() {
  return (
        <div>
            <div className='overflow-hidden'>
                <div className='h-screen hero-bg relative '>
                    <div className='absolute top-0 left-0 w-full -z-10 h-full overflow-hidden'>
                        {/* <div className="bg-black"></div> */}
                        <video src={herovideo} autoPlay muted loop className='h-full md:w-full'></video>
                    </div>
                    <div className='container mx-auto relative px-4'>
                        <Header />
                        <section className='hero-section flex items-center'>
                            <article className='text-center w-full'>
                                <h1 className='text-[2rem] md:text-4xl lg:text-[55px] font-[900] leading-[150%] sm:whitespace-nowrap w-fit mx-auto typewriter'>WELCOME TO <span className='gradient-text'>TURTLE</span> BOT</h1>
                                <p data-aos="slide-up" className='text-xl md:text-3xl mb-5 sm:whitespace-nowrap font-poppin'><span className='gradient-text'>Empowering</span> Your Trading <span className='gradient-text'>Success</span></p>
                                <div className='' data-aos="fade-in" data-aos-delay="500">
                                    <a href='' className='inline-block mx-4 mb-4'>
                                        <button className='py-3 px-12 border-2 border-orange font-semibold text-lg hover:bg-orange hover:text-black rounded-lg'>Chart <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
                                    </a>
                                    <a href=''className='mx-4' >
                                        <button className='py-3 px-12 border-2 bg-white font-semibold text-lg hover:bg-white/[0.8] text-black rounded-lg'>Buy Now <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
                                    </a>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <div className='relative' id='introduction'>
                    <div className='container mx-auto px-4'>
                        <div className=' flex items-center pt-10 flex-col md:flex-row justify-between max-w-[1040px] mx-auto mb-[100px]'>
                            <img src={newBg} className="absolute w-full -z-20 left-0 opacity-[0.2] rotate-180" />
                            <article className='p-2 md:pr-4 w-full '>
                                <h2 className='text-3xl sm:text-5xl w-fit p-5 px-10 mx-auto relative family-violet mb-8 lg:mb-0'>
                                    <p data-aos="zoom-up" className='text-orange'>Introduction</p>
                                </h2>
                                <p data-aos="slide-up" className='mb-4 text-lg font-poppin'>Unlock the power of algorithmic trading with Turtle Bots, your trusted partner in the world of automated trading. </p>
                                <p data-aos="slide-up" className='mb-4 text-lg font-poppin'>We are a cutting-edge trading bot company that specializes in developing intelligent and robust trading solutions designed to maximize your profitability in the dynamic financial markets.</p>
                                <p data-aos="slide-up" className='mb-4 text-lg font-poppin'>Take control of your trading destiny and join the revolution in automated trading with Turtle Bots. Our innovative solutions are designed to enhance your trading performance, save you time, and unlock new opportunities in the financial markets. </p>
                                <p data-aos="slide-up" className='mb-4 text-lg font-poppin'>Experience the power of cutting-edge technology and start your journey toward trading success today</p>
                                {/* <p data-aos="slide-up" className='mb-4 text-lg font-poppin'>Blockchain is a type of technology that involves the distribution of a ledger. This ledger contains transactions known as blocks. These blocks are linked in the form of a chain.</p>
                                <p data-aos="slide-up" className='mb-4 text-lg font-poppin'>Hence “blockchain” in such a way that it is updated in every transaction. Additionally, because of the cryptography used, it is impossible to alter or modify any records.</p>
                                <p data-aos="slide-up" className="mb-4 text lg font-poppin">The native token of the Proof of Inu blockchain is Proof of Inu. Proof of Inu focuses on safety of tokens launched on Proof of Inu.</p> */}
                            </article>
                            <div data-aos="fade-out" data-aos-delay="500" className='md:w-1/2 shrink-0 hidden'>
                                <video src={herobg} muted autoPlay loop className='w-full hidden'></video>
                                <img src={img}/>
                            </div>
                        </div>
                        <About />
                        <Utilities />
                        <Tokenomics />
                        <Features />
                        {/* <Counter /> */}
                        <Roadmap />
                        <HowToBuy />
                        {/* <Faq /> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
  )
}

export default Home
