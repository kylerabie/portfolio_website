import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-10 items-center">
      <div className="col-span-1 flex items-center justify-center">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center bg-gray-900 transition-transform duration-300 hover:scale-110">
          <Image
            src="/profile-pixel.png"
            alt="Profile picture of Kyle Rabie running"
            width={100}
            height={100}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="col-span-3">
        <h1 className="font-heading text-xl leading-tight text-white mb-1">Kyle Rabie</h1>
        <p className="text-sm text-white opacity-50">Data Engineer</p>
        <p className="text-sm text-white opacity-50">South Africa</p>
        <div className="flex gap-4 mt-2">
          <Link href="https://www.linkedin.com/in/kyle-rabie-554a9816b/" target="_blank" className="text-sm text-white opacity-50 hover:opacity-100 transition-opacity">LinkedIn</Link>
          <Link href="https://github.com/kylerabie" target="_blank" className="text-sm text-white opacity-50 hover:opacity-100 transition-opacity">GitHub</Link>
        </div>
      </div>
    </div>
  );
} 