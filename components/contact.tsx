'use client';


import { Mail} from "lucide-react";
import { Button } from "./ui/button";
import animationData from "@/data/confetti.json";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";

export function Contact(){

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "cimensamet338@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

      const defaultOptions = {
        loop: true,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setCopied(false);
        }, 5000);

        return () => clearInterval(interval);
      }, []);

    return (
        <div className="mx-auto  md:w-3/4  w-full my-10 py-5">
            <div className="md:mx-5 mx-auto">
                <h2 className="font-semibold text-3xl text-[#2D2E32] dark:text-[#d1d1d1] ">
                    Contact Me
                </h2>

                <div className="mt-5  flex items-center">
                    <div className="p-1 bg-slate-200 rounded-lg ">
                        <Mail  size={32}/>
                    </div>
                    <p className="ml-5">You can mail me at <a className="" href="mailto:cimensamet338@gmail.com">cimensamet338@gmail.com</a></p>
                </div>

                <div className="mt-5 relative flex  duration-300">
                    {/* button border magic from tailwind css buttons  */}
                    {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                    {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                    {/* add handleCopy() for the copy the text */}
                    <div
                        className={`absolute -bottom-5 left-0  ${copied ? "block" : "hidden"
                        }`}
                    >
                        {/* <img src="/confetti.gif" alt="confetti" /> */}
                        <Lottie options={defaultOptions} height={200} width={400} />
                    </div>
                    <Button
                        onClick={handleCopy}
                        variant={'outline'}
                    >
                        {copied ? "Email is Copied!" : "Or copy my email address"}
                    </Button>
                    </div>
            </div>
        </div>
    )
}