import React from 'react'
import SectionHeading from './SectionHeading'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { faqs } from '@/constants'
import Accordian from './Accordian'

const FaqSection = () => {
  return (
    <section className='max-width section-padding overflow-hidden'>
        <SectionHeading 
        title='Frequently Asked Question'
        subtitle=''
        />

        <div className='flex flex-col tablet:flex-row gap-5 items-start'>
            <div className='box'> 

                <Accordian data={faqs} />
            </div>
            <div className='box flex flex-col gap-5 tablet:max-w-md'>
                <div className='w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2'>
                    <Star fill="currentcolor" size={30} />

                </div>

  <div>
    <h5 className='text-grey-700 mb-2'>
    Still have any questions
    </h5>
    <p className='text-gray-600'>
    If you have any questions or need further information, please feel free to reach out. I’m here to provide more details and assist you with any inquiries you may have.
    </p>
  </div>
           <Link href={"/contact"} className='btn btn-primary w-max' >
           contact me <ArrowRight />
           </Link>
            </div>

        </div>

    </section>
  )
}

export default FaqSection
