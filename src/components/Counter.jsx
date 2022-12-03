import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function Counter(){
    const [counterOn, setCounterOn] = useState(false);


    return(
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <section className="bg-black py-8 my-[100px]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-evenly">
                        <CounterItem 
                            counterOn={counterOn}
                            number={1170}
                            text="Holders"
                        />
                        <CounterItem 
                            counterOn={counterOn}
                            number={6730}
                            text="Transactions"
                        />
                        <CounterItem 
                            counterOn={counterOn}
                            number={45000}
                            text="Total Liquidity"
                        />
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    )
}

function CounterItem({number, text, counterOn}){
    return(
        <div data-aos="slide-up" className="text-white text-center mb-6 md:mb-0">
            <h4 className="text-2xl font-medium">{counterOn && <CountUp start={0} end={number}/>}+</h4>
            <p>{text}</p>
        </div>
    )
}

export default Counter