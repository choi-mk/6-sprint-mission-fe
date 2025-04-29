import ItemDetail from "./_components/ItemDetail";
import QuestionForm from "./_components/QuestionForm";
import QuestionList from "./_components/QuestionList";

export default async function ItemDetailPage({ params }) {
  const { itemId } = await params;

  return (
    <div className="px-4 flex justify-center flex-col py-4 items-center">
      <ItemDetail itemId={itemId} />
      <QuestionForm />
      <QuestionList itemId={itemId} />
    </div>
  );
}
