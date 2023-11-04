import React from "react";
import Marquee from "react-fast-marquee";

const NavbarTop = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto bg-secondary   flex h-20 justify-center items-center mt-8 ">
        <button className="btn btn-primary rounded-none ml-4">Latest</button>
      <Marquee className="text-xl font-semibold mx-4">
        I can be a React component, multiple React components, or just some Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus facere ex dolor, dicta molestias pariatur sunt rem. Cum, nisi.
        text.
      </Marquee>
    </div>
  );
};

export default NavbarTop;
