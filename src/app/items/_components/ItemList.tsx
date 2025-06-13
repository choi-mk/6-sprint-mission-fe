"use client";
import React, { useState } from "react";
import Item from "./Item";
import Link from "next/link";
import { TItem } from "@/types";
// import { getAllProducts } from "@/lib/product";
// import { useQuery } from "@tanstack/react-query";

interface ItemListProps {
  order: "recent" | "favorite";
  search: string;
}

function ItemList({ order, search }: ItemListProps) {
  //   const {
  //     data: items = [],
  //     isLoading,
  //     isError,
  //     error,
  //   } = useQuery({
  //     queryKey: ["product", search, order],
  //     queryFn: () => getAllProducts(search, order),
  //   });

  const items: TItem[] = [];

  //   if (isLoading) return <div>로딩중...</div>;
  //   if (isError) return <div>{error.message}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
      {items.map((item) => (
        <Link href={`/items/${item.id}`} key={item.id} className="w-42">
          <Item item={item} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
