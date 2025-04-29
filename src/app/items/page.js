import ItemHeader from "./_components/ItemHeader";
import ItemList from "./_components/ItemList";

export default async function ItemsPage() {
  return (
    <div className="p-4">
      <ItemHeader />
      <ItemList />
    </div>
  );
}
