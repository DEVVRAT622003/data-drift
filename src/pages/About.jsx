import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen mt-16">
      <h1 className="text-xl lg:text-2xl text-center py-4 font-bold  underline">About Us</h1>
      <div className="text-gray-800 text-lg lg:text-xl text-center">
        <p>
          <span className="text-purple-700 font-bold">DataDrift</span> is a user-centric
          file sharing platform designed to make file sharing{" "}
          <span className="text-purple-700 font-bold">seamless</span> and{" "}
          <span className="text-purple-700 font-bold">effective</span>. It facilitates the
          transfer of large files through easily shareable links, ensuring
          compatibility and convenience for all users. DataDrift can handle
          high-speed transfers, ensuring less waiting time and more
          productivity. It also makes collaboration easy, allowing simultaneous
          downloads and real-time notifications. DataDrift caters to a wide
          array of industries and use cases, including creative professionals,
          businesses, educators, and researchers. It offers affordable and
          scalable plans tailored to meet different needs, ensuring consistent
          performance and reliability. DataDrift stands as a testament to how
          modern technology can simplify complex tasks and transform the
          way we handle data.
        </p>
      </div>
    </div>
  );
};

export default About;
