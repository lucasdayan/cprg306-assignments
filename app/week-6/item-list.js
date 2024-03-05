'use client';

import Item from "./item";
import React, { useState, useEffect } from 'react';

const ItemList = ({items}) => {
  const [sortBy, setSortBy] = useState("name")
  const [nameButtonClass, setNameButtonClass] = useState("bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3.5");
  const [categoryButtonClass, setCategoryButtonClass] = useState("bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3.5");

  const sortedItems = [...items].sort((item1, item2) => {
    if (sortBy === "name") {
      const name1 = item1.name || "";
      const name2 = item2.name || "";
      return name1.localeCompare(name2);
    } else {
      const category1 = item1.category || "";
      const category2 = item2.category || "";
      return category1.localeCompare(category2);
    }
  });

  useEffect(() => {
    if (sortBy === "name") {
      setNameButtonClass("bg-green-500 text-white font-bold py-2 px-4 rounded mr-3.5");
      setCategoryButtonClass("bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3.5");
    } else if (sortBy === "category") {
      setNameButtonClass("bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3.5");
      setCategoryButtonClass("bg-green-500 text-white font-bold py-2 px-4 rounded mr-3.5");
    }
  }, [sortBy]);

  return (
    <div>
      <button id="nameButton" onClick={() => setSortBy("name")} type="button" className={nameButtonClass}>
        Sort by Name
      </button>
      <button  id="categoryButton" onClick={() => setSortBy("category")} type="button" className={categoryButtonClass}>
        Sort by Category
      </button>
      <ul className="divide-y divide-gray-600">
      {sortedItems.map(itemJson => (<Item key={itemJson.id} item={itemJson}></Item>))}
      </ul>
    </div>
    )
  }
  
  export default ItemList;