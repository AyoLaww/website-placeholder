import React from "react";
import 'animate.css'
import { Instagram, Linkedin, Mail, Twitter } from "react-feather";


export function LandingPage() {
  return (
    <div className="h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-cyan-500/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <InfoCard />
    </div>
  );
}

export function InfoCard(){
    return (
        <>
            <div className="infocard  cursor-default animate__animated animate__fadeInUp">
                <h1 className="text-slate-300  text-4xl font-black">Yo, <span className=" law-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Law</span> here</h1>
                <div className="copy-container animate__animated animate__fadeInUp animate__delay-1s">
                    <p className="text-slate-300 lg:text-xl font-normal py-5 sm: lg:leading-9 sm:leading-5">My personal website is still in the works ( it may take a while ) so this is a small placeholder for the time being. <br />
                    Who am  I ? I am a <span className="highlight underline underline-offset-2 text-cyan-500">web designer</span>, <span className="highlight underline underline-offset-2 text-cyan-500">developer</span> and <span className="highlight underline underline-offset-2 text-cyan-500">graphic designer</span> currently pursuing a computer science degree.
                    <br />
                    what do I do ? I create <span className="highlight underline underline-offset-2 text-cyan-500">digital experiences</span> in the web that give businesses an <span className="highlight underline underline-offset-2 text-cyan-500">unfair advantage</span> in the market.
                    <br />
                    Dont be shy <span className="highlight underline underline-offset-2 text-cyan-500">connect</span> with me through my socials below and lets get started on your project 
                    </p>
                </div>
                

                <div className="socials-rack flex flex-row gap-5 w-40 animate__animated animate__fadeInUp animate__delay-2s">
                    <a href="https://www.instagram.com/ayolaww/" target="_blank" className="socials text-slate-400 hover:text-cyan-500 ease-out duration-500">
                        <Instagram />
                    </a>

                    <a href="https://www.linkedin.com/in/lawrence-simiyu-737b53284/" target="_blank" className="socials text-slate-400 hover:text-cyan-500 ease-out duration-500">
                        <Linkedin />
                    </a>

                    <a href="https://twitter.com/AyoLaww" target="_blank" className="socials text-slate-400 hover:text-cyan-500 ease-out duration-500">
                        <Twitter />
                    </a>

                    <a href="mailto:lawrenceonsongo@gmail.com" className="socials text-slate-400 hover:text-cyan-500 ease-out duration-500">
                        <Mail />
                    </a>
                </div> 
            </div>
        </>
    )
}

