import searchIco from "@/assets/images/search.svg";

const Search = () => {
  return (
    <p className="relative">
      <img
        className="absolute w-5 left-2.5 top-2.5"
        src={searchIco}
        alt="검색"
      />
      <input
        className="text-light-gray-800 px-10 py-2 outline-none rounded-lg"
        placeholder="Search books..."
      />
    </p>
  );
};

export default Search;
