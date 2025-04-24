import ItemDetail from "./_components/ItemDetail";
import QuestionForm from "./_components/QuestionForm";
import QuestionList from "./_components/QuestionList";

export default async function ItemDetailPage() {
  const questions = [];
  const itemId = 1;
  return (
    <div className="px-4 flex justify-center flex-col py-4 items-center">
      <ItemDetail />
      <QuestionForm />
      <QuestionList questions={questions} itemId={itemId} />
    </div>
  );
}
