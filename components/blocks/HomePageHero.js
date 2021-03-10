import { SearchIcon } from "components/icons";
import { Hero } from "components/ui";
import { MdSearch } from "react-icons/md";

const Searchbox = () => {
  return (
    <div class="bg-white text-gray-500 rounded shadow flex items-center w-auto md:w-1/2 p-2">
      <span class="w-auto flex justify-end items-center text-gray-500 pl-2">
        <SearchIcon />
      </span>
      <input
        class="w-full rounded p-2 focus:outline-none"
        type="text"
        placeholder="Try 'Los Angeles'"
      />
      {/* <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
        <p class="font-semibold text-xs">Search</p>
      </button> */}
    </div>
  );
};

export default function HomePageHero() {
  return (
    <div className="max-w-5xl mx-auto md:mt-10">
      <Hero
        bgImage="http://www.kshead.org/assets/upload/slider/4858_slider1.jpg"
        title="Explore your favourite courses and institutes"
        content={<Searchbox />}
      />
    </div>
  );
}
