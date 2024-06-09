import { ToggleTheme } from "./toggle-theme";

export function Nav(){
    return(
        <nav className="flex justify-between p-4 shadow-md fixed md:w-3/4 mx-auto top-0 left-0 right-0 z-50 bg-white dark:bg-black  w-full md:rounded-lg">
            <div>
                <span className="cursor-pointer">Logo</span>
            </div>
            <ul className="flex gap-6">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
                <li><ToggleTheme /></li>
            </ul>
        </nav>
    )
}