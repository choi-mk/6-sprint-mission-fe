import ItemHeader from "./_components/ItemHeader";
import ItemList from "./_components/ItemList";

export default async function ItemsPage() {
  const items = [
    { id: 1, name: "로봇청소기", price: 150000 },
    { id: 2, name: "로봇청소기", price: 150000 },
  ];
  return (
    <div className="p-4">
      <ItemHeader />
      <ItemList items={items} />
    </div>
  );
}
