'use client';

import Item from "./item";
import React, { useState, useEffect } from 'react';
import items from './items.json'



const ItemList = () => {
  const [sortBy, setSortBy] = useState("name")
  const [nameButtonClass, setNameButtonClass] = useState("bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3.5");
  const [categoryButtonClass, setCategoryButtonClass] = useState("bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3.5");

  const sortedItems = items.sort((item1, item2) => {
    if (sortBy === "name") {
      return item1.name.localeCompare(item2.name);
    } else {
      return item1.category.localeCompare(item2.category);
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