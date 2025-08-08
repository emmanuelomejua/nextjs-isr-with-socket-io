import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const ComposePost = () => {

    const router = useRouter();

      const closeModal = () => {
        router.back();
      };

  return (
    <div className='absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center'>
        {/* Top */}
        <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
            <div className="cursor-pointer" onClick={closeModal}>X</div>
            <div className="text-iconBlue font-bold">Drafts</div>
        </div>

        {/* Center */}
        <div className="">
            <div className="">
                <Image src='/general/alan.svg'alt='User' width={100}  height={100} />
                <input
                    className="flex-1 bg-transparent outline-none text-lg"
                    type="text"
                    placeholder="What is happening?!"
                />
            </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-[#2f3336] pt-4">
            <div className="flex gap-4 flex-wrap">
            <Image
              src="icons/image.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-5 text-black bg-white rounded-full font-bold">Post</button>
        </div>
    </div>
  )
}

export default ComposePost;
