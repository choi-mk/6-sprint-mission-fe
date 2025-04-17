import React from "react";

function Footer() {
  return (
    <div className="h-40 bg-gray-900 pt-8 mt-10">
      <div className="flex flex-col mx-4 gap-6">
        <div className="flex justify-between">
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
