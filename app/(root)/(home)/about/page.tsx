import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { timeline } from '@/constants';

export const metadata: Metadata = {
    title: "About - Roushan Kumar",
};

const page = () => {
  return (
    <>
      <section className='max-width section-padding flex flex-col tablet:flex-row gap-20 items-center'>
        <div className='relative w-full tablet:w-1/2 h-[calc{300px+20vw)] tablet:h-[600px]'>
          <Image
            src={"/images/abot.png"}
            fill alt='about img'
            className='object-cover' />
        </div>
        <div className='tablet:w-1/2'>
          <div className='space-y-3 max-tablet:text-center flex flex-col'>
            <p className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded tablet:w-max:mx-auto">
              Welcome to the world of captivating web development!
            </p>
            <h1 className='text-grey-700'>I&apos;m Roushan</h1>
            <p className='text-grey-600'>
              I&apos;m Roushan, an Electronics and Communication Engineering student with a strong passion for web design. I excel in creating intuitive user interfaces using React and Tailwind CSS, delivering visually engaging and functional solutions.
              <br />
              <br />
              In addition to web development, I have a solid background in Data Structures and Algorithms (DSA) and Competitive Programming (CP). My expertise in DSA enables me to tackle complex problems efficiently, while my CP experience sharpens my coding skills and problem-solving abilities.
              <br />
              <br />
              My approach combines meticulous attention to detail with creative thinking, ensuring high-quality results. I prioritize clear communication with clients to bring their visions to life. My portfolio reflects my commitment to excellence and my capability as a skilled coder.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones section */}
      <section className="max-w-full section-padding">
        <SectionHeading
          title="Milestone of my Career"
          subtitle=""
        />
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple before:bg-opacity-30">
          {timeline.map((item, index) => (
            <div key={index}
              className='relative flex items-center justify-between tablet:justify-start tablet:odd:flex-row-reverse group'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1 tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 group-first:before:absolute group-first:before:w-1 group-first:before:h-20 group-first:before:bottom-full group-first:before:bg-peach-600 group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full group-last:before:top-full group-last:before:bg-peach-600'>
                <span className='w-3 h-3 bg-purple rounded-full'></span>
              </div>
              <div className='w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box pl-5 tablet:pl-8'>
                <div className='flex items-center justify-between space-x-2 mb-1'>
                  <h6 className='text-gray-700'>{item.title}</h6>
                  <p className='font-semibold text-purple'>{item.duration}</p>
                </div>
                <div className='text-gray-600'>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
