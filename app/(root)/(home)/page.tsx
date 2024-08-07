import Link from 'next/link';
import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { benefits, portfolios, skills } from '@/constants';
import PortfolioItem from '@/components/PortfolioItem';
import TestimonialSection from '@/components/TestimonialSection ';
import FaqSection from '@/components/FaqSection';

const page = () => {
  return (
    <>
      <section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10'>
        {/* Left side */}
        <div className='tablet:w-2/3 mt-10 tablet:mt-0'>
          <div className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
            <p className='px-4 py-2 bg-peach-500 text-grey-600 w-max rounded'> Hello There🤗 </p>
            <h1>Roushan welcomes you</h1>
            <p className='text-gray-600'>
              Hello! I&apos;m Roushan Kumar, a dedicated and passionate Electronics and Communication Engineering student at Netaji Subhas University of Technology. With a keen interest in coding and electronics, I have honed my skills in various technologies, including React, Tailwind CSS, and Python.
            </p>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <Link href={"/contact"} className="btn btn-primary">
              <Phone />
              Contact Now
            </Link>
            <Link href={"/portfolio"} className="btn">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className='bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex'>
            <div>
              <h3 className='text-gray-700'>
                10 <span className='text-purple'>+</span>
              </h3>
              <p className='text-gray-600'>Projects Completed</p>
            </div>
            <div>
              <h3 className='text-gray-700'>
                1 <span className='text-purple'>+</span>
              </h3>
              <p className='text-gray-600'>Years of experience</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden'>
          <Image src={"/images/hero.png"} alt="hero" fill className="object-cover" />
        </div>
      </section>

      {/* Skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Creative Skills"
          subtitle="I excel in designing intuitive user interfaces and crafting unique solutions using tools like React and Tailwind CSS. My creativity drives me to approach challenges with innovative ideas, ensuring engaging and effective results."
        />
        {/* Skills */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6'>
          {
            skills.map((skill, index) => (
              <div key={index} className='box flex flex-col items-center gap-5'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink 0 mb-2'>
                  <Image src={skill.icon} alt={skill.name} width={35} height={35} />
                </div>
                <div>
                  <h4 className='text-grey-700'>{skill.name}</h4>
                  <p className='text-grey-600'>{skill.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* Benefit section */}
      <section className='max-width section-padding'>
        <SectionHeading
          title='Benefits'
          subtitle='By leveraging my skills in technology and design, I deliver solutions that enhance user experiences and streamline processes. My approach ensures efficient, innovative results that drive growth and address key challenges effectively.'
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
          {
            benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="box">
                <h5>{benefit.name}</h5>
                <p className='text-gray-700'>{benefit.name}</p>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            ))
          }
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
          {
            benefits.slice(2).map((benefit, index) => (
              <div key={index} className="box">
                <h5>{benefit.name}</h5>
                <p className='text-gray-700'>{benefit.name}</p>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            ))
          }
        </div>
      </section>

      {/* Portfolio section */}
      <section className='section-padding max-width'>
        <SectionHeading
          title="My Works"
          subtitle="I have developed a range of projects that showcase my skills in creating impactful solutions and designs. From interactive web applications to innovative tech integrations, my portfolio highlights my ability to turn ideas into functional, user-centric products"
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
          {
            portfolios.slice(0, 3).map((portfolio, index) => (
              <PortfolioItem key={index} portfolio={portfolio} />
            ))
          }
        </div>
        <Link href={"/portfolio"} className="btn btn-primary mt-10 mx-auto w-max">
          view All Projects
        </Link>
      </section>

      {/* Testimonial section */}
      <TestimonialSection />

      {/* FAQs Section */}
      <FaqSection />
    </>
  );
};

export default page;
