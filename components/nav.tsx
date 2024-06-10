import { ToggleTheme } from "./toggle-theme";

export function Nav(){
    return(
        <nav className="flex justify-between p-4 shadow-md fixed md:w-3/4 mx-auto top-0 left-0 right-0 z-50 bg-white dark:bg-black  w-full md:rounded-lg  max-w-[1300px]">
            <div>
                <span className="cursor-pointer font-semibold text-[#2D2E32] dark:text-[#efefef] text-lg ">
                <a href="/">
                        Samet
                    </a>
                </span>
            </div>
            <ul className="flex gap-6">
                <li className="cursor-pointer  font-medium">
                    <a href = "/#">
                        Home
                    </a>
                </li>
                <li className="cursor-pointer font-medium">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="cursor-pointer font-medium">
                    <a href="#contact">
                        Contact
                    </a>
                </li>
                <li><ToggleTheme /></li>
            </ul>
        </nav>
    )
}