import Link from "next/link";
import Image from 'next/image'
import ImageComp from "@/util/ImageKit";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Jobs",
    link: "/jobs",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className='h-[max-content] sticky top-0 flex flex-col justify-between pt-2 pb-4'>
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href='/' className="p-2 rounded-full hover:bg-[#181818]">
          <Image src='icons/logo.svg' alt="Logo" width={24} height={24}/>
        </Link>

        <div className="flex flex-col gap-1">
          {menuList.map((list, index) => (
            <Link href={list.link} key={index} className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4">
              <Image src={`icons/${list.icon}`} alt="" height={14} width={14}/>
              <span className="hidden xxl:inline text-sm">{list.name}</span>
            </Link>
          ))}

        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
             <ImageComp  src="default-image.jpg" alt="Omejua" w={40} h={40} tr={true} />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ifeanyi Omejua</span>
            <span className="text-sm text-textGray">@omejua</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  )
}

export default LeftBar;
