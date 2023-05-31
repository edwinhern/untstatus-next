import Image from "next/image";
import Link from "next/link";
import { TabsMap } from "../../src/utils/TabsMap";

const tabs = Object.keys(TabsMap).map((key) => ({
  name: key,
  link: key === "Donate" ? TabsMap[key] : `/${key.toLowerCase()}`,
}));

export const Navbar: React.FC = () => {
  return (
    <div
      id={"navbar"}
      className="flex flex-col items-center justify-center top-0"
    >
      <div className="relative flex-grow-0 pt-0">
        <div className="container mx-auto p-0 pb-5 md:pb-0 text-white">
          <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
            <div className="flex flex-row justify-center mt-[0.5vh] lg:mt-[0vh] lg:p-3 p-[.8vh]">
              <Link href="/">
                <a>
                  <Image
                    src="/assets/logos/logo-100.svg"
                    width={100 / 3}
                    height={100 / 3}
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
            <div className={`md:mt-4`}>
              {tabs.map((tab) => {
                return (
                  <Link href={tab.link} key={tab.name}>
                    <a className="p-4 px-3 sm:px-4 border-b-4 border-transparent hover:border-white">
                      {tab.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
