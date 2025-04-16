import Comments from "@/components/Comments";
import PostComment from "@/components/PostComment";
import PostDetail from "@/components/PostDetail";

export default function PostDetailPage() {
  return (
    <div className="flex justify-center m-4 flex-col">
      <PostDetail />
      <PostComment />
      <Comments />
      <div className="flex justify-center mt-10 ">
        <button className="bg-primary-100 text-white flex justify-center items-center w-60 h-12 font-semibold rounded-4xl">
          목록으로 돌아가기
          <img className="w-5 h-4" src="/assets/ic/ic_back.png" />
        </button>
      </div>
    </div>
  );
}
