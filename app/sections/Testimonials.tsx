import Image from "next/image";
import { stars } from "../data";
import { testimonialImage1, testimonialImage2 } from "../data";

const Testimonials = () => {
  return (
    <section className="p-[2rem] mt-[4rem]">
      <div className="flex flex-col md:flex-row gap-y-[5rem] max-[280px]:gap-y-[7rem] gap-x-[6rem]">
        <div className="md:pr-[4rem]">
          <Image
            src="/logos/Shopify.com svg.svg"
            className="mb-[1.5rem]"
            alt="shopify"
            width={80}
            height={80}
          />
          <div className="flex mb-[2rem]">
            {stars.map((star, index) => (
              <Image
                src={star}
                alt="rating"
                width={15}
                height={15}
                key={index}
              />
            ))}
          </div>
          <p className="text-xl md:text-3xl font-bold mb-[2rem] text-gray-900">
            ClearLink has upgraded our
            <br /> remote meetings. High-quality
            <br /> video, screen sharing, and
            <br /> top-notch security make it
            <br /> essential for our team.
          </p>
          <div className="flex max-w-[30rem] h-10">
            <Image
              src="/avatars/Avatar (5).png"
              alt="avatar"
              width={30}
              height={30}
            />
            <div className="ml-2">
              <p className="text-gray-900 font-bold">Sarah Thompson</p>
              <p>Project Manager, Shopify</p>
            </div>
            <div className="flex gap-5 md:gap-10 mt-4 ml-[5rem]">
              <Image
                src="/icons/arrow-left.svg"
                alt="arrow-left"
                width={20}
                height={20}
              />
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-left"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[20rem]">
          <div className="grid grid-cols-2">
            {
              testimonialImage1.map((image, index) => (
                <Image src={image} className={index === 0 ? 'mt-[3rem] ml-8' : 'mt-[-0.5rem] mb-[0.5rem]'} alt="image" width={120} height={120} key={index}/>
              ))
            }
          </div>
          <div className="grid grid-cols-3 gap-[0.5rem]">
            {
              testimonialImage2.map((image, index) => (
                <Image src={image} alt="image" width={120} height={120} key={index}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
