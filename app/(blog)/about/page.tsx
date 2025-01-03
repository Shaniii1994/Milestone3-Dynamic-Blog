import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full h-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src="/my-image.png" 
          alt="Shanyal Siddiqui"
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">Shanyal Siddiqui - Developer</h2>
        <p className="text-blue-500 mb-6">
          I have built this blog website to share engaging content with fellows. 
          The website leverages modern technologies like Sanity CMS to fetch and manage data efficiently. 
          My aim is to create a seamless reading experience with dynamic and up-to-date posts.
        </p>
        {/* Social Media Links */}
          <Link href="https://www.instagram.com/ishaniisid/">
            <div className="text-sky-500 hover:text-blue-700 text-2xl">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/shanyal-siddiqui-487ba6301/">
            <div className="text-sky-500 hover:text-blue-700 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>
      </div>
  );
};

export default About;