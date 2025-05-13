"use client";
import React, { useState } from "react";
import ItemHeader from "./ItemHeader";
import ItemList from "./ItemList";

function ItemPage() {
  const [order, setOrder] = useState("recent");
  const [search, setSearch] = useState("");
  return (
    <div>
      <ItemHeader setOrder={setOrder} setSearch={setSearch} />
      <ItemList order={order} search={search} />
    </div>
  );
}

export default ItemPage;
