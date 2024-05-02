/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import Header from './comp/header';
export default function Card() {
  return (
    <div className="h-96 rounded-2xl shadow-1000 xs:w-[350px]">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src='/mobile/art.jpg'
          alt="tip1"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      <div className="px-4 pt-3 text-2xl font-semibold text-black">
        Discover Your Art 
      </div>
      <div className="px-4 text-lg font-semibold text-neutral-700">
       To create One's world in any of the arts takes courage.
      </div>
    </div>
  );
}
