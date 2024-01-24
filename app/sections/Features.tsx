import { featureSet } from "../data";
import Image from "next/image";

const Features = () => {
  return (
    <section className="md:p-[2rem]">
      <div className="flex flex-col md:flex-row gap-x-[5rem] gap-y-[2rem]">
        <div>
          <div>
            <p className="text-blue-700 text-sm font-bold">
              The ClearLink Advantage
            </p>
            <h2 className="text-gray-800 text-3xl font-bold mt-[1rem] mb-[1rem]">Why choose ClearLink?</h2>
            <p className="text-gray-500 mb-[5rem]">
              In a world where connection is everything, ClearLink takes the
              lead. Our
              <br /> cutting-edge video conferencing app offers:
            </p>
          </div>
          <div className="max-w-[40rem] grid md:grid-cols-2 gap-y-[2rem] gap-x-[1.5rem]">
            {
              featureSet.map((feature, index) => (
                <article key={index} className="md:max-w-[20rem]">
                  <Image src={feature.icon} alt="feature" width={20} height={20} className="mb-[2rem]"/>
                  <h3 className="font-bold text-lg mb-[0.7rem]">{feature.heading}</h3>
                  <p>{feature.text}</p>
                </article>
              ))
            }
          </div>
        </div>
        <div className="md:mt-[5rem]">
          <Image src='/icons/Hand-drawn arrow.svg' alt="arrow" width={200} height={200} className="relative bottom-[-1rem]"/>
          <Image src='/images/Rectangle 1.png' alt="picture rectangle" width={350} height={350}/>
        </div>
      </div>
    </section>
  );
};

export default Features;
