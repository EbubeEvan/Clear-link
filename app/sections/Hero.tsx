"use client";

import Image from "next/image";
import Link from "next/link";
import { avatarSet, stars, memojis, memojiIcons } from "../data";
import SocialProof from "../components/SocialProof";

const Hero = () => {
  return (
    <section className="w-full h-full pt-[5rem] pb-[5rem]">
      <div className="flex flex-col md:flex-row md:gap-[5rem] lg:gap-[8rem]">
        <div>
          <h1 className="text-gray-800 text-3xl md:text-[3rem] font-bold leading-[2rem] md:leading-[3.5rem]">
            Uniting the world, <br /> one video call at a time
          </h1>
          <p className="mt-[1rem] text-gray-500">
            Experience the future of communication with ClearLink -<br /> where
            crystal-clear video conferencing meets
            <br /> unparalleled simplicity.
          </p>
          <div>
            <div className="flex gap-3 mt-[2rem] max-md:flex-col max-lg:items-center">
              <Link href="/">
                <button className="bg-blue-700 text-white px-[1.5rem] py-[1rem] rounded-full">
                  Start your free trial
                </button>
              </Link>
              <Image
                src="/icons/robot.svg"
                alt="AI icon"
                width={20}
                height={20}
              />
              <p className="lg:mt-4 text-blue-700">Discover AI assistant</p>
            </div>
            <div className="flex max-[280px]:flex-col max-[280px]:items-center">
              <div className="flex mt-10">
                {avatarSet.map((avatar, index) => (
                  <Image
                    src={avatar}
                    alt="avatar"
                    width={30}
                    height={30}
                    key={index}
                    className="-ml-1"
                  />
                ))}
              </div>
              <div className="ml-2 mt-8 max-[280px]:mt-5 text-gray-600">
                <div className="flex">
                  <div className="flex max-[280px]:ml-4">
                    {stars.map((star, index) => (
                      <Image
                        src={star}
                        alt="avatar"
                        width={15}
                        height={15}
                        key={index}
                      />
                    ))}
                  </div>
                  <p className="ml-1">5.0</p>
                </div>
                <p>from 3,000+ reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="bg-blue-100 mt-[3rem] md:mt-0 max-w-[22rem] p-[1rem] rounded-md shadow-xl shadow-gray-300">
            <div className="grid grid-cols-3 gap-[0.8rem]">
              {memojis.map((memoji, index) => (
                <Image
                  src={memoji.image}
                  className={memoji.bg}
                  alt="memoji"
                  style={{ borderRadius: "0.5rem" }}
                  width={100}
                  height={100}
                  key={index}
                />
              ))}
            </div>
            <div className="flex mt-[2rem] mb-[1rem] gap-[1rem] ml-[3.3rem] md:ml-0 lg:ml-[4rem] max-[280px]:ml-1 ">
              {memojiIcons.map((memojiIcon, index) => (
                <Image
                  src={memojiIcon}
                  alt="memojiIcon"
                  width={15}
                  height={15}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SocialProof />
    </section>
  );
};

export default Hero;
