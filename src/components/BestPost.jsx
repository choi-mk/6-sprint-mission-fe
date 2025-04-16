import React from "react";

function BestPost() {
  const heart = 10000;
  return (
    <div className="w-96 h-49.5 bg-gray-50 rounded-lg">
      <div className="w-25.5 h-7.5 bg-primary-100 rounded-b-2xl ml-6 flex justify-center items-center gap-1">
        <img className="w-3 h-3.5" src="/assets/ic/ic_medal.png"></img>
        <p className="text-white font-semibold">Best</p>
      </div>
      <div className="flex ml-6 mt-4">
        <p className="font-semibold text-xl w-46 h-16">
          맥북 16인치 얼마에 팔아야 하나요?
        </p>
        <div className="w-18 h-18 bg-white rounded-md flex justify-center items-center mr-6 ml-auto">
          <img className="w-12 h-11" src="/assets/img/default_img.png"></img>
        </div>
      </div>
      <div className="flex ml-6 mt-10">
        <div className="flex gap-2">
          <p>총명한 판다</p>
          <div className="flex items-center gap-1">
            <img className="w-3.5 h-3" src="/assets/ic/ic_heart.png" />
            <div className="text-gray-500">
              {heart > 9999 ? "9999+" : heart}
            </div>
          </div>
        </div>
        <div className="ml-auto mr-6 text-gray-400">2024.04.16</div>
      </div>
    </div>
  );
}

export default BestPost;
