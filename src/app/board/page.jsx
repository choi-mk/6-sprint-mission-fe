import { getArticle, getArticles, postArticle } from "@/lib/article";
import BulletinContainer from "../../components/BulletinContainer";

export default async function BoardPage() {
  // const articles = await postArticle({
  //   title: "열번째 아티클",
  //   content: "노트북 사고싶어요 ",
  // });

  return (
    <div className="flex justify-center w-full h-auto">
      <BulletinContainer />
    </div>
  );
}
