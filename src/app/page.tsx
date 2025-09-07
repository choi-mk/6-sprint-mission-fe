import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="w-full ">
      {/* Main Section */}
      <div className="flex relative justify-center w-full h-[40rem] lg:h-[30rem] bg-[#cfe5ff]">
        <div className="mb-0 flex flex-col lg:flex-row bg-[#cfe5ff] max-w-[70rem] w-full h-auto m-auto mx-10 items-center">
          <div className="flex flex-col relative items-start w-[22.5rem] h-[16.5rem] mt-10">
            <p className="text-[2.5rem] font-bold leading-[3.5rem] w-[300px] text-black">
              일상의 모든 물건을 거래해 보세요
            </p>
            <Link
              className="inline-block mt-8 mb-16 w-[22.5rem] h-14 rounded-[2.5rem] bg-primary-100 text-background text-center text-base font-bold leading-[3.5rem] no-underline z-10"
              href="/items"
            >
              구경하러 가기
            </Link>
          </div>
          <Image
            src="/assets/img/img_home_top.png"
            width={746}
            height={349}
            alt="home top"
            className="ml-auto max-w-[47.5rem] w-full h-auto mb-0"
          />
        </div>
      </div>

      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full">
        {/* Sub 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[62rem] w-full m-[8.5rem_1.5rem]">
          <Image
            src="/assets/img/img_home_01.png"
            alt="home 01"
            width={588}
            height={444}
            className="w-[588px] h-[444px]"
          />
          <div className="m-[8rem_2.5rem_2rem] z-10 min-w-[19rem]">
            <p className="text-primary-100 text-sm font-bold">Hot item</p>
            <p className="my-3 text-black font-bold text-[2.5rem]">
              인기 상품을 확인해 보세요
            </p>
            <p className="my-6 text-lg font-medium">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>

        {/* Sub 2 */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-[62rem] w-full m-[8.5rem_1.5rem]">
          <div className="m-[8rem_2.5rem_2rem] z-10 min-w-[19rem] text-right">
            <p className="text-primary-100 text-sm font-bold">Search</p>
            <p className="my-3 text-black font-bold text-[2.5rem]">
              구매를 원하는 상품을 검색하세요
            </p>
            <p className="my-6 text-lg font-medium">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <Image
            src="/assets/img/img_home_02.png"
            alt="home 02"
            width={588}
            height={444}
            className="w-[588px] h-[444px]"
          />
        </div>

        {/* Sub 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[62rem] w-full m-[8.5rem_1.5rem]">
          <Image
            src="/assets/img/img_home_03.png"
            alt="home 03"
            width={588}
            height={444}
            className="w-[588px] h-[444px]"
          />
          <div className="m-[8rem_2.5rem_2rem] z-10 min-w-[19rem]">
            <p className="text-primary-100 text-sm font-bold">Register</p>
            <p className="my-3 text-black font-bold text-[2.5rem]">
              판매를 원하는 상품을 등록하세요
            </p>
            <p className="my-6 text-lg font-medium">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex relative justify-center w-full h-[30rem] bg-[#cfe5ff] px-5">
          <div className="flex flex-row bg-[#cfe5ff] max-w-[70rem] w-full h-auto m-auto mb-0">
            <p className="text-[2.5rem] font-bold leading-[3.5rem] w-[300px] text-black mt-[100px]">
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </p>
            <Image
              src="/assets/img/img_home_bottom.png"
              alt="home bottom"
              width={746}
              height={397}
              className="ml-auto max-w-[47.5rem] w-full h-auto mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
