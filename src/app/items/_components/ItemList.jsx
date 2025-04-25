import React from "react";
import Item from "./Item";
import Link from "next/link";

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {items.map((item) => (
        <Link href={`/items/${item.id}`} key={item.id} className="w-42">
          <Item name={item.name} price={item.price} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
