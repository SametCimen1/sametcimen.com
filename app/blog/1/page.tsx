import Image from "next/image"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const page = () => {
    // const codeString = 
    // `const num = 1;\n let num2 = 3;//`;

    const codeString = 
    `msfconsole --payload windows/meterpreter/reverse_https`;

    return (
        <div className='md:w-1/2 max-w-[1300px] mx-auto leading-7 tracking-wide'>
            <div className='w-full   mt-10 p-2 md:p-0'>
                {/* <Image
                    src = "https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={1024}
                    height={1024}
                    alt = "cover image of the blog"
                    className="w-full mt-5 mx-auto"                
                /> */}
                <h1 className="text-4xl font-semibold my-10 mb-2">How to Make a Trojan Virus Look Like an Image File
                </h1>
                <p className="text-muted-foreground">Published on 
                Aug 12, 2024</p>
                <div className="mt-10 w-full">
                    <h2 className="font-medium text-2xl mt-10 mb-2">OverView</h2>




                    <p className="text-muted-foreground">C iles, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>
                    <Image 
                        src = "https://i1.sndcdn.com/artworks-OQQvyjAmK6Yt9ob8-obeDgQ-t500x500.jpg"
                        width={500}
                        height={500}
                        alt="image of final result file"
                        className="w-full my-2"
                    /> 


                    <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>
                    
                 
                    <h2 className="font-medium text-2xl mt-10 mb-2">Steps</h2>
                    <p><a className="underline text-blue-500" href="#step1">1. Creating the trojan using msfvenom</a></p>
                    <p><a className="underline text-blue-500" href="#step2">2. Hosting the virus using apache2 start</a></p>
                    <p><a className="underline text-blue-500" href="#step3">3. Creating a PowerShell file to download both image and the trojan</a></p>
                    <p><a className="underline text-blue-500" href="#step4">4. Converting the bat file to exe</a></p>
                    <p><a className="underline text-blue-500" href="#step5">5. How to make it Anti-virus proof</a></p>


                    <div id="step1">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Creating the Trojan</h2>
                        <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>

                        <div className="p-2 border  w-full my-4">
                            <SyntaxHighlighter language="javascript" style={vs} className="dark:!bg-black dark:!text-white">
                                {codeString}
                            </SyntaxHighlighter>
                        </div>

                    </div>


                    <div id="step2">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Hosting the Trojan using apache2</h2>
                        <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>

                        <div className="p-2 border  w-full my-4">
                        <SyntaxHighlighter language="javascript" style={vs} className="dark:!bg-black dark:!text-white">
                            {codeString}
                        </SyntaxHighlighter>
                        </div>

                    </div>


                    <div id="step3">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Powershell</h2>
                        <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>

                        <div className="p-2 border  w-full my-4">
                        <SyntaxHighlighter language="javascript" style={vs} className="dark:!bg-black dark:!text-white">
                            {codeString}
                        </SyntaxHighlighter>
                        </div>

                    </div>




                    <div id="step4">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Creating the .exe file</h2>
                        <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>

                        <div className="p-2 border  w-full my-4">
                        <SyntaxHighlighter language="javascript" style={vs} className="dark:!bg-black dark:!text-white">
                            {codeString}
                        </SyntaxHighlighter>
                        </div>

                    </div>


                    <div id="step5">
                        <h2 className="font-medium text-2xl mt-10 mb-2">How to make it pass AntiVirus</h2>
                        <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>

                        <div className="p-2 border  w-full my-4">
                        <SyntaxHighlighter language="javascript" style={vs} className="dark:!bg-black dark:!text-white">
                            {codeString}
                        </SyntaxHighlighter>
                        </div>

                    </div>




                </div>
            </div>  
        </div>
    )
}

export default page