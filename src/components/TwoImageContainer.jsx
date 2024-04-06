import React from 'react'
import Image from 'next/image'
import img1 from '../../public/photo-3.jpg'
import img2 from '../../public/photo-4.jpg'
import img3 from '../../public/photo-5.jpg'
function TwoImageContainer() {
  return (
    <div>
      <div className="flex justify-between gap-[100px] items-center relative">
        <div className="z-10 flex flex-col justify-around gap-[50px] items-center">
          <Image src={img1} alt="" height={600} width={600} />
          <Image src={img2} alt="" height={1200} width={600} />
        </div>
        <div className="z-10">
          <Image src={img3} alt="" height={400} width={600} />
        </div>
        <div className="bg-[#b6ffc0] w-[1000px] h-[1150px] absolute  left-[-100px] top-[-100px]" />
      </div>
    </div>
  );
}

export default TwoImageContainer