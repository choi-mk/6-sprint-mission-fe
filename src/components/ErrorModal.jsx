import React from "react";

function ErrorModal({ errorMessage, setErrorMessage }) {
  return (
    <div className="z-500 fixed inset-0 bg-black/70 flex items-center justify-center ">
      <div className="w-80 h-55 bg-white rounded-xl flex justify-center items-center flex-col opacity-100">
        <p className="text-gray-800">{errorMessage}</p>
        <button
          onClick={() => setErrorMessage("")}
          className="bg-primary-100 text-white py-3 px-17 rounded-xl mt-13"
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
