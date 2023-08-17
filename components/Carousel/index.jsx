"use client";

import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller, Grid } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




function Carousel(props) {
  const { type } = props;
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();


  useEffect(() => {
    if (swiper) {
      if (!swiper.destroyed) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
        swiper.on('observerUpdate', () => swiper.slideTo(0))
      }
    }
  }, [swiper]);


  return (
    <div className={`carousel ${type === 'arrows' ? 'carousel--arrow' : ''}`}>
      <div className="swiper-button swiper-button-prev" ref={prevRef}>
        <ArrowBackIosIcon />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Grid]}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current
        }}
        onSwiper={setSwiper}
        pagination={type === "dots" ? {
          clickable: true
        } : undefined}
        updateOnWindowResize
        observer
        observeParents
        loopFillGroupWithBlank
        {...props}
      >
        {props.children}
      </Swiper>
      <div className="swiper-button swiper-button-next" ref={nextRef}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Carousel
