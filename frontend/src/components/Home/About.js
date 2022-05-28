import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-[1350px] md:h-[500px] bg-zinc-200 mt-16" id="about">
        <h1 className="text-center text-4xl py-12 font-bold">
          What our clients say <br></br>
          <span className="text-primary">About Us</span>{" "}
        </h1>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl grid md:grid-cols-4 justify-items-center gap-8">
          <div className="w-64 h-64 bg-slate-100"></div>
          <div className="w-64 h-64 bg-slate-100"></div>
          <div className="w-64 h-64 bg-slate-100"></div>
          <div className="w-64 h-64 bg-slate-100"></div>
        </div>
      </div>
    </>
  );
};

export default About;
