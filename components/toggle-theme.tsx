"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ToggleTheme(){
    const { setTheme, theme } = useTheme();

    const onSubmitHander = ()=>{
        if(theme === 'dark')
            setTheme('light')
        if(theme === 'light')
            setTheme('dark')
    }

    return(
        <Button className="mt-2" onClick={onSubmitHander}>
            Switch to dark mode
        </Button>
    )

}