import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";



const Home = () => {
  return (
    <div className="h-full">
      <div className="px-4 pt-4 flex justify-between text-[#71767b] font-bold border-b-[1px] border-[#2f3336]">
          <Link href='' className="pb-3 flex items-center border-b-4 border-[#1d9bf0]">For you</Link>
           <Link className="pb-3 flex items-center" href="/">Following</Link>
          <Link className="hidden pb-3 md:flex items-center" href="/">Technology</Link>
          <Link className="hidden pb-3 md:flex items-center" href="/">Marketing</Link>
          <Link className="hidden pb-3 md:flex items-center" href="/">Business</Link>
      </div>

      <Share/>
      <Feed/>
    </div>
  );
}

export default Home;
