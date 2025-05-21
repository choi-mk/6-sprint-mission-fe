import ItemForm from "@/components/ItemForm";
import { getProduct } from "@/lib/product";

export default async function PatchItemPage({ params }) {
  const { itemId } = await params;
  const item = await getProduct(itemId);
  return (
    <div className="flex justify-center m-4">
      <ItemForm
        dname={item.name}
        ddescription={item.description}
        dprice={item.price}
        dtags={item.tags}
        itemId={itemId}
      />
    </div>
  );
}
