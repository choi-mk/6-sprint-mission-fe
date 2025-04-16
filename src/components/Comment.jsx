import React from "react";

function Comment() {
  return (
    <div className="border-b border-gray-200 h-24">
      <div className="flex justify-between">
        <p>혹시 사용 기간이 어떻게 되실까요?</p>
        <img className="w-1 h-4" src="/assets/ic/ic_setting.png" />
      </div>
      <div className="mt-6 flex">
        <img src="/assets/ic/ic_profile.png" className="w-8 h-8" />
        <div className="ml-2">
          <p className="text-gray-600 text-xs">똑똑한 판다</p>
          <p className="text-gray-400 text-xs">1시간 전</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
