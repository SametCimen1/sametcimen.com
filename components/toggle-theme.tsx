"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react";

export function ToggleTheme(){
    const { setTheme, theme } = useTheme();
    console.log(theme)


    const onSubmitHander = () =>{
        if(theme === 'dark'){
            setTheme('light')
        }
        if(theme === 'light'){
            setTheme('dark')
        }
        if(theme === 'system'){
            setTheme('dark')
        }

    console.log(`current theme ${theme}`)
    }

    return(
        <div>
            {theme === 'dark' ?
            (<MoonIcon size= {24} strokeWidth="2" className="cursor-pointer fill-[#1a5dc9]" color="#1a5dc9" onClick={onSubmitHander}/>)
            :
            (<SunIcon size= {24} strokeWidth="2" className="cursor-pointer" color="#c9c11a" onClick={onSubmitHander} />)
            }
        </div>
    )

}