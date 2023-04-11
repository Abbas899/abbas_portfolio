import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full md:h-screen flex items-center py-16 px-2 md:px-8 2xl:px-16">
        <div className="max-w-[1240px] md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">About</p>
            <h2 className="py-2 text-gray-600">Who I am</h2>
            <p> // I am not your normal Developer</p>
            <p className="py-2 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              velit delectus laboriosam quis, laborum minus corrupti, laudantium
              suscipit quod, iste adipisci id sed? Magni laudantium suscipit ut
              maxime sed facere!
            </p>
            <p className="py-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              incidunt itaque aliquid quasi et, reiciendis repudiandae?
              Reiciendis illo nesciunt magnam rerum et sapiente ea error
              perspiciatis, cupiditate, voluptatum neque beatae.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
          </div>
          <div className="w-full h-auto p-2 shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
