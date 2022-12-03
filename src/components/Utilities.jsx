import React from 'react'
import safety from '../assets/utilities/safety.png'
import doa from '../assets/utilities/doa.png'
import launching from '../assets/utilities/launching.png'
import smartcontract from '../assets/utilities/smartcontract.png'
import nft from '../assets/utilities/nft.png'
import staking from '../assets/utilities/staking.png'
import wallet from '../assets/utilities/wallet.png'
import domain from '../assets/utilities/domain.png'
import liquidity from '../assets/utilities/liquidity.png'
import tokenburn from '../assets/utilities/tokenburn.png'

function Utilities() {
    return (
        <section className='mb-[100px]' id='utilities'>
            <h2 className='text-[3rem] leading-[120%] mb-4 font-bold text-center'>UTILITIES</h2>
            <div className='grid grid-cols-3 gap-4'>
                <UtilitiesList
                    img={safety}
                    title="User Safety"
                    content="The NFT space is perverted with
                    several cases of rugs. Thus, making
                    it unsafe for mass participation.
                    As a result, we are building Proof of
                    Inu to shield the degens from the
                    unfortunate incidences of rugs and
                    create a safer environment.
                    We focus on safety of tokens launched on
                    proof of inu and we make"
                />
                <UtilitiesList
                    img={doa}
                    title="DOA"
                    content="We are creating a decentralised autonomous
                    organisation for all degens, so that they can
                    be part of the decision making for Proof of
                    Inus layer2 blockchain. DAO members can get whitelisted in
                    our coming projects. Encouraging
                    the community to vote and take part
                    in project decision-making."
                />
                <UtilitiesList
                    img={launching}
                    title="Launching"
                    content="We are launching decentralized
                    exchange (DEX) where users can
                    trade cryptocurrencies directly
                    with other users without relying
                    on any intermediaries. Users
                    trade directly from their own
                    wallet without the requirement
                    of KYC."
                />
                <UtilitiesList
                    img={smartcontract}
                    title="Deploy SMart Contract"
                    content="Proof of Inu is an L2 protocol on
                    Ethereum. As we progress, we will be
                    launching both our testnet and
                    mainnet. We are enhancing active
                    developers' participation and
                    building innovative projects in our
                    ecosystem."
                />
                <UtilitiesList
                    img={nft}
                    title="NFT Marketplace"
                    content="Creating an NFT marketplace
                    where people can buy and sell
                    their NFTs. Using their Proof of Inu
                    is just like ENS.
                    This marketplace will give people a
                    chance to be an early supporter
                    and be eligible for any future airdrop
                    when more projects start to launch
                    their NFTs in the marketplace."
                />
                <UtilitiesList
                    img={staking}
                    title="Staking"
                    content="Staking $Proof of inu token will
                    generate passive income. Drake's
                    help the network to be secured."
                />
                <UtilitiesList
                    img={wallet}
                    title="SHIB 2.0 Wallet"
                    content="We are launching a on-custodial
                    crypto wallet where you can
                    securely keep your crypto. The
                    safety of your tokens is our
                    priority."
                />
                <UtilitiesList
                    img={domain}
                    title="Domain System"
                    content="Creating means of Identity to meme
                    degens like ENS. It will help all degens
                    to have an identity and will boost
                    adoption."
                />
                <UtilitiesList
                    img={liquidity}
                    title="Liquidity Control"
                    content="The liquidity will be controlled by
                    DAO not the dev team because
                    power belongs to the degens.
                    Dev tokens will be locked."
                />
                <UtilitiesList
                    img={tokenburn}
                    title="Token Burn"
                    content="There is going to be a regular burning
                    of tokens to make it more scares."
                />
            </div>
        </section>
    )
}

function UtilitiesList({img, title, content}){
    return(
        <div className='p-3 color-[#d4dce3] grid grid-rows-[auto] gap-2.5'>
            <article className='text-center '>
                <div className='h-[190px] w-[190px] mb-6 rounded-full overflow-hidden mx-auto'>
                    <img src={img} alt="" className=' '/>
                </div>
                <h4 className='text-[22px] mb-2.5 font-semibold'>{title}</h4>
                <p>{content}</p>
            </article>
        </div>
    )
}

export default Utilities
