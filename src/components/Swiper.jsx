import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import anonymous from "../assets/features/anonymous.jpg"
import bestsecurity from "../assets/features/best-security.jpg"
import concensus from "../assets/features/concensus-algorithm.jpg"
import immutablity from "../assets/features/data-Immutability.jpg"
import decentralized from "../assets/features/decentralized-system.jpg"
import transparency from "../assets/features/transparency.jpg"

export default function SwiperItem() {
  return (
    <>
      <h4 className="text-[3rem] leading-[150%] font-bold" id="features">Our Features</h4>
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperContent 
            img={bestsecurity}
            title="Best Security"
            content="Blockchain technology is considered more
            secure than its contemporaries because of
            lack of a single point of failure."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
              img={decentralized}
              title="Decentralized System"
              content="Decentralised technology gives you the power
              to store your assets in a network without the
              oversight and control of a single person
              organisation or entity."
            />
        </SwiperSlide>
        <SwiperSlide>
        <SwiperContent
            img={immutablity}
            title="Data Immutability"
            content="It ensures that no data is corrupted. How this
            works is that every node on the system has a copy
            of the ledger. So, to alter any data, there must be
            a unanimous agreement of every node. This makes
            blockchain secure and transparent. So, to alter
            any data, there must be an unanimous agreement
            of every node. This makes blockchain secure and
            transparent."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            img={transparency}
            title="Transparency"
            content="Every transaction, be it tangible or non-
            tangible, can be traced from the start to the finish with blockchain."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            img={concensus}
            title="Consensus Algorithm"
            content="For a transaction to be accepted and
            recorded on the blockchain, all the
            participants or nodes must agree to follow
            the same rules."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            img={anonymous}
            title="Anonymous"
            content="It is true that every transaction is transparent
            and open to the public, but the actual persons are
            kept anonymous through the addresses. For
            example, suppose a person sends a sum of money,
            the receiver will know that the sender is linked to
            a bitcoin address, but they will not know the
            actual address. There are several reasons for
            this – one of them is privacy."
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

function SwiperContent({content, title, img}){
  return(
    <article className="max-w-[455px] text-left">
      <div>
        <img src={img} alt="" className="mx-auto h-[10px]"/>
      </div>
      <h3 className="mb-9 text-[1.5rem] md:text-[2rem] leading-[120%]">{title}</h3>
      <p className="mb-8 text-sm md:text-base">{content}</p>
    </article>
  )
}