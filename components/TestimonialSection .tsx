"use client";

import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import { UsewindowSize } from '@/hooks/useWindowsSize';

const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType>();
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
    <div>
      <section className='max-width section-padding'>
        <SectionHeading
          title='What my Clients say about me'
          subtitle='My clients appreciate my dedication to delivering high-quality solutions and my ability to address their needs with precision. They value my commitment to excellence and my proactive approach in ensuring their projects exceed expectations.'
        />

        <div className='pb-3 border-peach flex justify-between items-center'>
          <p>
            {reviews.length} total reviews
          </p>
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
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <SingleReview review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default TestimonialSection;

const SingleReview = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className='box flex flex-col gap-5'>
      <div className="flex items-center justify-between">
        <div>
          <h6 className='text-grey-700'>{review.name}</h6>
          <p className="text-grey-500 text-sm">{review.designation}</p>
        </div>
        <div>
          {review.socialLinks?.map((link, index) => (
            <a key={index} href={link.url} className='text-purple hover:scale-105 transition-transform duration-300'>
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={20}
            fill="currentColor"
            className={`text-purple ${
              index < review.stars ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>
      <p className='text-gray-600'>{review.review}</p>
    </div>
  );
};
