"use client";


import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { shareAction } from '@/actions';
import ImageEditor from './ImageEditor';



const Share = () => {

    const [media, setMedia] = useState<File | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [settings, setSettings] = useState<{type: 'original' | 'square' | 'wide', sensitive: boolean}>({
      type: 'original',
      sensitive: false
    })


    const handleMediaUpload = (e: ChangeEvent <HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
          setMedia(e.target.files[0])
        }
    }

    const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form className='p-4 flex gap-4' action={shareAction}> 

        <div className="relative w-10 h-10 rounded-b-full overflow-y-scroll">
            <Image src='/general/alan.svg' fill={true} alt='' />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <input
            type="text"
            name="desc"
            placeholder="What is happening?!"
            className="bg-transparent outline-none placeholder:text-textGray text-xl"
          />

          {
            previewURL &&
            <div className="relative rounded-xl overflow-hidden ">
              <Image src={previewURL} alt='' width={600} height={400}/>

              <div className="absolute top-2 left-2 bg-black opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer" onClick={() => setIsEditorOpen(true)}>Edit</div>
             </div>
          }

          <div className="">
            {
              previewURL && isEditorOpen && (<ImageEditor previewURL={previewURL} onClose={() => setIsEditorOpen(false)} settings={settings} setSettings={setSettings}/>)
            }
          </div>


          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-4 flex-wrap">
            <input type="file" className="hidden" id='file' name='file' onChange={handleMediaUpload}/>

            <label htmlFor='file'>
              <Image
                src="icons/gif.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>

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
            <button type='submit' className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
          </div>

        </div>
    </form>
  )
}

export default Share;
