import ItemForm from "@/components/ItemForm";

export default async function PatchItemPage({ params }) {
  const { itemId } = await params;

  return (
    <div className="flex justify-center m-4">
      <ItemForm itemId={itemId} />
    </div>
  );
}
