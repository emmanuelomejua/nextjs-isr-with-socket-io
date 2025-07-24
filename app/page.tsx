import Feed from "@/components/Feed";
import Share from "@/components/Share";



const Home = () => {
  return (
    <div className="h-full">
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">

      </div>
      <Share/>
      <Feed/>
    </div>
  );
}

export default Home;
