import Image from 'next/image';
import React from 'react'

const PostInfo = () => {

  return (
    <div className='cursor-pointer relative h-5 w-5'>
        <Image src='/icons/infoMore.svg' alt='' fill/>
    </div>
  )
}

export default PostInfo;
