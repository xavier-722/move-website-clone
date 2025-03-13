import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "../SearchInput";
import ThemeToggler from "../ThemeToggler";
const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-5 bg-[#121212] text-white">
     { /* logo */}
      <Link href={"/"}>
      <Image 
         src= "https://i.ibb.co/BHXJsgYv/Image-1.png"
         alt="Logo" 
         width={120}
         height={100}
         priority={true}
         className="cursor-pointer w-40 h-auto"
       />
      </Link>
      { /* others */}
      <div className="text-white flex space-x-2">
      {/* Genre */}
      <GenreDropDown />
      {/* search */}
      <SearchInput />
      {/* theme */}
      <ThemeToggler/>
      </div>
    </div>
  );
};
export default Header;