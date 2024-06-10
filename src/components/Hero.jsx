import React from "react";
import bg from "../../public/header.avif";
import Image from "next/image";
function Hero() {
  return (
    <div className="pt-10">
      <div className="relative">
        <Image
          alt="background image"
          src={bg}
          className=""
          height={700}
          width={1300}
        />
      </div>
      <div className="z-10 absolute bottom-[400px] right-[800px]">
        <h1 className="text-[100px] font-bold text-[#ff764d]">Abelton</h1>
      </div>
    </div>
  );
}

export default Hero;
