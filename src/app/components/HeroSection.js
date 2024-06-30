"use client";


import React from 'react'
import Image from "next/image";
import my_pic from "../../../public/images/my_pic.jpg"
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import dynamic from 'next/dynamic';



function HeroSection ()  {
  return (
   <>
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 place-self-center">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br  from-blue-500 via-green-500 to-yellow-400 ">
                {" "}
                Hello1, I&#39;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Neelava",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Full Stack Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "Data Science Aspirant",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#BBBABC] mb-6 text-lg lg:text-xl">
              I am a pursuing engineering student. I want to make my career in
              Web Development
            </p>
            <div>
              <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-400 mb-2 text-white font-medium w-[130px] ">
               <Link href="#Contact">Hire Me</Link>
              </button>
              <button className="px-1 py-1 sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-400  text-white font-medium w-[160px] mb-3 ">
                <span className="block bg-[#2F017C] hover:bg-[#4A05BB] rounded-full px-5 py-2">
                  <Link href="https://drive.google.com/drive/folders/18Wnh7GFVMKh1nvDf2LF5LRTm99mDo7Ub?usp=drive_link">Download CV</Link>
                </span>
              </button>
            </div>
            <div>
            <button
                type="button"
                className="text-white bg-[#0654CD] hover:bg-[#1C7EF4]/90 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                   fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="https://www.facebook.com/profile.php?id=100007931326197">Facebook</Link>
              </button>
              <button
                type="button"
                className="text-white ml-2 bg-black hover:bg-[#24292F]/90 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                   fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="https://github.com/Neelava9681">Github</Link>
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br  from-yellow-300 via-pink-600 to-blue-900 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <Link href="https://www.instagram.com/myself_neelava">Instagram</Link>
              </button>
              <button
                type="button"
                className="text-white ml-2 bg-[#0654CD] hover:bg-[#1C7EF4]/90 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <Link href="https://www.linkedin.com/in/neelava-bhattacharya-7a0448246">linkedin</Link>
              </button>
            </div>
          </div>

          {/* translate-x-1/2 translate-y-1/2 */}
          <div className="col-span-5 place-self-center">
            <div className="rounded-full  place-self-center bg-[#4A05BB] w-[250px] h-[250px] lg:w-[280px] lg:h-[280px] relative lg:mt-6">
              <Image
                src={my_pic}
                alt="hero image"
                className="absolute transform"
                width={300}
                height={300}
                style={{borderRadius:"50%"}}
              />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
