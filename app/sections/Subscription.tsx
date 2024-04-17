import Image from "next/image"
import Link from "next/link"
import { subscribe } from "../data"

const Subscription = () => {
  return (
    <section className='mt-[-2rem] md:mt-0 md:pt-[1rem] pb-[5rem] md:pl-[2rem]'>
      <div className="flex flex-col md:flex-row gap-y-[4rem] gap-x-[10%]">
        <div className="w-full md:w-[45%]">
          <h3 className='text-gray-900 font-bold text-3xl'>Ready to clear the path to<br/> perfect communication?</h3>
          <div className="mt-[2rem]">
            {
              subscribe.map((sub, index) => (
                <div className="flex mb-[0.7rem]" key={index}>
                  <Image src={sub.icon} alt="icon" width={30} height={30}/>
                  <p className="text-gray-600 ml-2">{sub.title}</p>
                </div>
              ))
            }
          </div>
          <div className="mt-[2rem] flex flex-col gap-y-[1rem] gap-x-2 md:flex-row">
            <Link href='/'>
              <button className="bg-white text-gray-900 border-solid border border-slate-400 px-2 py-2 rounded-full">Talk to sales</button>
            </Link>
            <Link href='/'>
              <button className="text-white bg-blue-700 px-2 py-2 rounded-full">Start your free trial</button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[45%]">
          <Image src='/images/Screen mockup (REPLACE FILL).png' alt="screen" width={500} height={500}/> 
        </div>
      </div>
    </section>
  )
}

export default Subscription