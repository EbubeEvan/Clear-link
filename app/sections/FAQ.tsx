import { FAQs } from "../data"
import Image from "next/image"

const FAQ = () => {
  return (
    <section className='mt-10  pt-[1rem] md:pt-[5rem] pb-[5rem] md:pl-[2rem]'>
      <div className="flex flex-col md:flex-row gap-y-[1rem] gap-x-[10%]">
        <div className="w-full md:w-[40%]">
          <p className='text-sm text-blue-700 font-bold'>Support</p>
          <h3 className='text-gray-800 text-3xl font-bold mt-[1.3rem] mb-[1.3rem]'>FAQs</h3>
          <p className='text-gray-500'>Everything you need to know about the product<br/> and billing. Can&apos;t find the answer you&apos;re looking<br/> for? Please chat to our friendly team.</p>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="mb-[3rem]">
            <p className='text-gray-900 font-bold mb-[1rem]'>How many participants can join a ClearLink video conference?</p>
            <p className='text-gray-600'>ClearLink offers flexible meeting options. Depending on your subscription<br/> plan, you can host meetings with varying numbers of participants. Our plans<br/> are designed to accommodate small team collaborations and large-scale<br/> webinars, ensuring you have the right fit for your needs.</p>
          </div>
          <div>
            {
              FAQs.map((faq, index) => (
                <div className="flex flex-row md:justify-between max-md:gap-2 mb-[2rem] md:mb-[3rem]" key={index}>
                  <p className="text-gray-900 font-bold">{faq.question}</p>
                  <Image src={faq.icon} alt="drop-down" width={20} height={20}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ