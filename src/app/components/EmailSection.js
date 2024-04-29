"use client";

import React, { useState } from "react";
import Image from "next/image";
import github from "../../../public/images/github.png";
import linkedin from "../../../public/images/linkedin.png";
import Link from "next/link";
import axios from "axios";

const EmailSection = () => {

  const [emailSubmitted,setemailSubmitted] = useState(false)


   // const endpoint = "/api/send";

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",

    //   },
    //   body: JSONdata,
    // };
    //   const response = await fetch("/api/send", options);
    //   const resData = await response.json();

    //   console.log(resData);

    //   if (resData.status === "success") {
    //     console.log("messeage sent.");
    //   }



  const handelSubmit = async (e) => {
    e.preventDefault();
    const data1 = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(data1)
    // const JSONdata = JSON.stringify(data);

    try {
      const response = await axios.post("/api/hello", data1);
      console.log("response", response.data);
      if(response.status===200){
        console.log("Message sent")
        setemailSubmitted(true)
        e.target.reset(); 
      }
      
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <section
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        id="Contact"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 translate-1/2 "></div>
        <div className="z-10">
          <h5 className="text-5xl font-bold text-white my-2 ">Lets Connect</h5>
          <p className="text-[#BBBABC] mb-4 max-w-md">
            I am currently looking for new oportunites, my inbox is always open.
            Where you have a question or just want to say hi, i will try my best
            to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/Neelava9681">
              <Image src={github} alt="giticon" height={75} width={75}></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/neelava-bhattacharya-7a0448246/">
              <Image
                src={linkedin}
                alt="linkedin"
                height={75}
                width={75}
              ></Image>
            </Link>
          </div>
        </div>

        <div>
          <form className="flex flex-col" onSubmit={handelSubmit}>
            <label
              htmlFor="email"
              className="text-white block mb-1 text-xl font-semibold"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              
              placeholder="yourmail@gmail.com"
              required
              className="text-xl bg-[#4A05BB]  border border-blue-300  rounded-lg text-gray-100 w-full p-2.5 px-3 mb-5  "
            ></input>

            <label
              htmlFor="subject"
              className="text-white block mb-1 text-xl font-semibold"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
          
              placeholder="write about your subject"
              required
              className="text-xl bg-[#4A05BB]  border border-blue-300  rounded-lg text-gray-100 w-full p-2.5 px-3 mb-5  "
            ></input>
            <label
              htmlFor="message"
              className="text-white block mb-1 text-xl font-semibold"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
            
              placeholder="give a message here...."
              className="text-xl bg-[#4A05BB]  border border-blue-300  rounded-lg text-gray-100 w-full p-2.5 px-3 mb-5"
            ></textarea>
            <button className="rounded-lg text-2xl font-semibolt bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-green-200 dark:focus:ring-green-400 mb-2 text-white font-medium w-full h-[4rem]">
              Send Message
            </button>
            {
              emailSubmitted && (
                <p className="text-green-500 text-xl mt-4">
                  Message sent successfully!
                </p>
              )
            }
          </form>
        </div>
      </section>
    </>
  );
};

export default EmailSection;
