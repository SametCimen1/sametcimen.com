'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FF95m9DDDH8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { useState } from "react";







export default function CopyButton({text}:{text:string}) {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text:string) => {
    try {
    // Copy text to clipboard
      await navigator.clipboard.writeText(text); 
      setIsCopied(true); // Show "Copied!" effect
      setTimeout(() => {setIsCopied(false)}, 2000)
  
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  
  

  return (
  
  <div onClick={()=>handleCopy(text)}>
      
      {isCopied && (
                    <div
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 1000,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                    >
                    Copied to the clipboard!
                    </div>
      )}


      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              Copy to Clipboard <ClipboardIcon className="ml-2 h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to copy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

function ClipboardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}