import React from "react";
import BestBulletin from "./BestBulletin";
import Bulletin from "./Bulletin";

function BulletinContainer() {
  return (
    <div className="m-4 flex flex-col gap-6 md:m-6 w-full max-w-300">
      <BestBulletin />
      <Bulletin />
    </div>
  );
}

export default BulletinContainer;
