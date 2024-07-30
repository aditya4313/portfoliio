"use client"

import { portfolios } from '@/constants'
import { UsewindowSize } from '@/hooks/useWindowsSize'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PortfolioItem from './PortfolioItem';

const PortFolioSection = ({ data, title }: { data: typeof portfolios; title: string; }) => {
    const swiperRef = useRef<SwiperType | null>(null); // Initialized with null
    const [slidesPerView, setSlidesPerView] = useState(3);
    const { width } = UsewindowSize();

    useEffect(() => {
        if (width < 768) {
            setSlidesPerView(1);
        } else if (width < 1268) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    }, [width]);

 
    return (
        <section className='max-width section-padding'>
            <div className='pb-3 border-peach flex justify-between items-center'>
                <p>{title}</p>
                <div className='flex gap-2'>
                    <button className='bg-peach-200 border border-peach p-1 rounded text-gray-700'
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft />
                    </button>
                    <button className='bg-peach-200 border border-peach p-1 rounded text-gray-700'
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className='pt-8'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper as SwiperType;
                    }}
                >
                    {data.map((portfolio, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-item-wrapper">
                                <PortfolioItem portfolio={portfolio} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default PortFolioSection;