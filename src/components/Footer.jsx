import React from "react";

function Footer() {
  return (
    <div className="h-40 bg-gray-900 pt-8 mt-10 w-full flex flex-col items-center lg:mt-75">
      <div className="flex flex-col px-6 mx-4 gap-6 max-w-300 w-full md:flex-row-reverse md: justify-between">
        <div className="flex justify-between md:w-4/7">
          <div className="flex gap-7.5">
            <div className="text-gray-200">Privacy Policy</div>
            <div className="text-gray-200">FAQ</div>
          </div>
          <div className="flex gap-3">
            <img className="w-5 h-5" src="/assets/ic/ic_facebook.png" />
            <img className="w-5 h-5" src="/assets/ic/ic_twitter.png" />
            <img className="w-5 h-5" src="/assets/ic/ic_youtube.png" />
            <img className="w-5 h-5" src="/assets/ic/ic_instagram.png" />
          </div>
        </div>
        <div className="text-gray-400">@codeit - 2024</div>
      </div>
    </div>
  );
}

export default Footer;
