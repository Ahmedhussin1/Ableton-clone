import Hero from "@/components/Hero";
import ImageContainer from "@/components/ImageContainer";
import TwoImageContainer from "@/components/TwoImageContainer";
import Image from "next/image";
import img from '../../public/poster-meet-the-makers.avif'
export default function Home() {
  return (
    <main className="bg-white flex flex-col gap-[100px] justify-center items-center max-w-[1500px] mx-auto">
      <Hero />
      <div className="flex flex-col gap-10 w-[800px] z-10 mb-[300px]">
        <p className="font-bold text-[25px] text-black">
          We make <span className="text-[#0000ff] text-[28px]">Live</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Push</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Note</span> and{" "}
          <span className="text-[#0000ff] text-[28px]">Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </p>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <ImageContainer />
      <div className="flex flex-col gap-10 w-[800px] z-10 mt-[200px]">
        <p className="font-bold text-[25px] text-black">
          We make <span className="text-[#0000ff] text-[28px]">Live</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Push</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Note</span> and{" "}
          <span className="text-[#0000ff] text-[28px]">Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </p>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <div>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/9SbnhgjeyXA"
          title="Why Ableton - Juanpe"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-10 w-[800px] z-10 mt-[100px] mb-[200px]">
        <p className="font-bold text-[25px] text-black">
          We make <span className="text-[#0000ff] text-[28px]">Live</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Push</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Note</span> and{" "}
          <span className="text-[#0000ff] text-[28px]">Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </p>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <TwoImageContainer />
      <div className="flex flex-col gap-10 w-[800px] z-10 mt-[200px] mb-[100px]">
        <p className="font-bold text-[25px] text-black">
          We make <span className="text-[#0000ff] text-[28px]">Live</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Push</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Note</span> and{" "}
          <span className="text-[#0000ff] text-[28px]">Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </p>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <div>
        <Image alt="img" src={img} height={100} width={1300} />
      </div>
      <div className="flex flex-col gap-10 w-[800px] z-10 mt-[100px] mb-[100px]">
        <p className="font-bold text-[25px] text-black">
          We make <span className="text-[#0000ff] text-[28px]">Live</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Push</span>,{" "}
          <span className="text-[#0000ff] text-[28px]">Note</span> and{" "}
          <span className="text-[#0000ff] text-[28px]">Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </p>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>

    </main>
  );
}
