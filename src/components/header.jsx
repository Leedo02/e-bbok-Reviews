import btnData from "../assets/headerData.json";
import Button from "./button";
import Search from "./search";
import darkModeIconSvg from "@/assets/images/night.svg";

const Header = () => {
  return (
    <header className="bg-light-gray-700 py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between text-gray-50 items-center">
        <p className="text-2xl font-semibold">E-Book Reviews</p>
        <div className="flex">
          {btnData.btnData.map((btnData) => (
            <p className="px-6">
              <Button
                key={btnData.id}
                btnType={btnData.btnType}
                btnText={btnData.btnText}
              />
            </p>
          ))}
        </div>
        <div className="flex items-center">
          <Search />
          <p className="w-9 h-9 ml-5 darkModeBtn">
            <Button
              btnType={"darkModeSet"}
              btnText={<img src={darkModeIconSvg} alt="다크모드" />}
            />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
