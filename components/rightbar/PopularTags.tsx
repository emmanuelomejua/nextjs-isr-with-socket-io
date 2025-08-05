import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PopularTags = () => {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-[#2f3336] flex flex-col gap-4'>
        <h1 className="text-xl font-bold text-[#e7e9ea]">
        {"What's"} Happening
      </h1>

        {/* Trending */}
      <div className="flex gap-4">
        <div className="flex gap-4">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="/general/post.jpeg"
            alt="event"
            width={75}
            height={75}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-[#e7e9ea]">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-[#71767b]">Last Night</span>
        </div>
      </div>
      </div>

    <div className="">
        <div className="flex items-center justify-between">
        <span className="text-[#71767b] text-sm">Technology • Trending</span>
        <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-[#e7e9ea] font-bold">OpenAI</h2>
        <span className="text-[#71767b] text-sm">20K posts</span>
    </div>

    <div className="">
        <div className="flex items-center justify-between">
            <span className="text-[#71767b] text-sm">Technology • Trending</span>
            <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-[#e7e9ea] font-bold">OpenAI</h2>
        <span className="text-[#71767b] text-sm">20K posts</span>
    </div>

    {/* TOPICS */}
    <div className="">
        <div className="flex items-center justify-between">
            <span className="text-[#71767b] text-sm">Technology • Trending</span>
            <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-[#e7e9ea] font-bold">OpenAI</h2>
        <span className="text-[#71767b] text-sm">20K posts</span>
    </div>

    <Link href="/" className="text-[#1d9bf0]">
        Show More
    </Link>

    </div>
  )
}

export default PopularTags;

   