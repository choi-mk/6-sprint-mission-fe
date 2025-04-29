import ArticleForm from "@/components/ArticleForm";
import { getArticle } from "@/lib/article";

export default async function PatchPage({ params }) {
  const { articleId } = await params;
  const article = await getArticle(articleId);
  return (
    <div className="flex justify-center m-4">
      <ArticleForm
        dtitle={article.title}
        dcontent={article.content}
        articleId={articleId}
      />
    </div>
  );
}
