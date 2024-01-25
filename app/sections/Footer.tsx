import Image from "next/image";
import Link from "next/link";
import { footerhead, footerLinks } from "../data";
import Copyright from "../components/Copyright";

const Footer = () => {
  return (
    <footer className="pb-[2rem] md:pb-0 md:pl-[2rem]">
      <div className="flex flex-col gap-y-[2rem] md:flex-row">
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
        <div className="text-sm text-gray-500 max-w-[60rem] md:ml-[4rem]">
          <div className="grid grid-cols-4 mb-[1rem] md:gap-x-[4rem]">
            {footerhead.map((footer, index) => (
              <h5 key={index}>{footer}</h5>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-y-[1rem] md:gap-x-[4rem]">
            {footerLinks.map((footer, index) => (
              <Link href="/" key={index}>
                {footer}
              </Link>
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
              src="/icons/google-play-logo.jpg"
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
