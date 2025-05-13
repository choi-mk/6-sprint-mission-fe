"use client";
import React, { useState } from "react";
import Item from "./Item";
import Link from "next/link";
import { getAllProducts } from "@/lib/product";
import { useQuery } from "@tanstack/react-query";

function ItemList({ order, search }) {
  const { data: items = [], isLoading } = useQuery({
    queryKey: ["product", search, order],
    queryFn: () => getAllProducts(search, order),
  });

  if (isLoading) return <div>로딩중...</div>;
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
