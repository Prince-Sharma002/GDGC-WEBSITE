import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-22">
      <div className="flex flex-col text-center">
        <div className="text-5xl font-semibold text-rose-800">Our Sponsors</div>
        <div className="text-gray-500 pt-3 tracking-widest">
          People who have helped us throughout our journey constantly.
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src={
              "https://mms.businesswire.com/media/20210414005467/en/871272/23/horz-full-color.jpg"
            }
            alt="InterLedger Foundation"
            width={500}
            height={500}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699637800/NS_dvg3st.png"
            }
            alt="Newton School"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
