
import Image from 'next/image'
import img1 from '../../public/photo-1.jpg'
import img2 from '../../public/photo-2.jpg'
function ImageContainer() {
  return (
    <div>
      <div className="flex justify-between gap-[100px] items-center relative">
        <div className='z-10'>
          <Image src={img1} alt="" height={1200} width={600} />
        </div>
        <div className='z-10'>
          <Image src={img2} alt="" height={400} width={600} />
        </div>
        <div className="bg-[#fbffa7] w-[1000px] h-[900px] absolute right-[-100px] top-[-200px]"/>
      </div>
    </div>
  );
}

export default ImageContainer