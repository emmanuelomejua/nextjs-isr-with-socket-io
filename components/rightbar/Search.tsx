import Image from 'next/image';
import React from 'react'

const Search = () => {
  return (
    <div className='bg-[#202327] py-2 px-4 flex items-center gap-4 rounded-full'>
        <Image src='/icons/explore.svg' alt='' width={16} height={16} />
        <input type="text" placeholder="Search" className="bg-transparent outline-none placeholder:text-[#71767b]"/>
    </div>
  )
}

export default Search;
