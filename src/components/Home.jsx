import React from 'react'
import Header from './Header'
import img from '../assets/new_cryptocurrency.png'


function Home() {
  return (
        <div>
            <div className='hero-bg'>
                <div className='container mx-auto'>
                    <div className='h-screen max-h-[625px]'>
                    <Header />
                    <section className='hero-section flex items-center'>
                        <article className='text-center borde w-full'>
                            <h1 className='text-[55px] font-[900] leading-[150%]'>THE $PROOF OF INU TOKEN</h1>
                            <p className='text-3xl mb-5'>We focus on safety of tokens launched on proof of inu</p>
                            <div>
                                <a href='https://www.dextools.io/app/en/ether/pair-explorer/0xD8340E3348C9d886de5C76A2c6D1e69c3Df454bF' className='mx-4 mb-2.5'>
                                    <button className='py-3 px-12 border-2 font-semibold text-lg hover:bg-white hover:text-black rounded-lg'>Chart <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
                                </a>
                                <a href='https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xA56B5C6162c7311D86d5AbC66E4b29a283392117'className='mx-4 mb-2.5' >
                                    <button className='py-3 px-12 border-2 bg-white font-semibold text-lg hover:bg-white/[0.8] text-black rounded-lg'>Buy Now <i className="fa-solid fa-arrow-right-long ml-2"></i></button>
                                </a>
                            </div>
                        </article>
                    </section>
                    <div className='flex items-center justify-between max-w-[1040px] mx-auto '>
                        <article className='max-w-[455px]'>
                            <h2 className='text-[3rem] leading-[120%] mb-4'>Introduction</h2>
                            <p className='mb-4 text-xl'>Blockchain is a  type of technology that involves the distribution of a ledger. This ledger contains transactions known as blocks. Theseblocksarelinkedintheformofachain.</p>
                            <p className='mb-4 text-xl'>Hence  “blockchain”  in  such  a  way  that  it  is  updated  in  every transaction. Additionally, because of the cryptography used, it is impossible to alter or modify any records.</p>
                        </article>
                        <div className='w-1/2'>
                            <img src={img}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home
