import Image from "next/image";
import Link from "next/link";
import {
  footer1,
  footer2,
  footer3,
  footer4,
} from "../data";
import Copyright from "../components/Copyright";

const Footer = () => {
  return (
    <footer className="pb-[2rem] md:pb-0 md:pl-[2rem] mt-5 md:mt-[5rem]">
      <div className="flex flex-col gap-y-[2rem] gap-x-[5%] md:flex-row">
        <div className="text-sm text-gray-600">
          <div className="flex gap-2">
            <Image
              src="/icons/clear-link.svg"
              alt="logo"
              width={20}
              height={20}
            />
            <p className="text-gray-900 font-bold text-lg">ClearLink</p>
          </div>
          <p className="mt-[1rem]">
            ClearLink is your gateway to effortless, high-
            <br />
            quality video conferencing. Join us in shaping
            <br /> the future of communication!
          </p>
        </div>
        <div className="text-sm text-gray-500 max-w-[60rem] md:ml-[4rem] grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10">
          <div className="flex flex-col gap-5 font-bold">
            {footer1.map((footer , index) => (
              <p key={index}>{footer}</p>
            ))}
          </div>
          <div className="flex flex-col gap-5 font-bold">
            {footer2.map((footer , index) => (
              <p key={index}>{footer}</p>
            ))}
          </div>
          <div className="flex flex-col gap-5 font-bold">
            {footer3.map((footer , index) => (
              <p key={index}>{footer}</p>
            ))}
          </div>
          <div className="flex flex-col gap-5 font-bold">
            {footer4.map((footer , index) => (
              <p key={index}>{footer}</p>
            ))}
          </div>
        </div>
        <div className="md:ml-[8rem]">
          <p className="text-blue-700 text-sm font-bold">Get the app</p>
          <Link href="/">
            <Image
              src="/images/Mobile app store badge.svg"
              alt="apple store"
              width={120}
              height={120}
              className="mb-2 mt-3"
            />
          </Link>
          <Link href="/" className="bg-white">
            <Image
              src="/icons/googleplay.png"
              alt="apple store"
              width={120}
              height={120}
            />
          </Link>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
